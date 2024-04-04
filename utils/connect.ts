import {initializeConnector, Web3ReactHooks} from '@web3-react/core';
import config, { WalletTypeEnum, Network } from "@/config"
import { MetaMask } from '@web3-react/metamask';
import {WalletConnect} from '@web3-react/walletconnect';
import {Network as NetworkConnector} from '@web3-react/network';
import {CoinbaseWallet} from '@web3-react/coinbase-wallet';


const DefaultConnectorPayload = initializeConnector(
    (actions) => new NetworkConnector({
        actions,
        urlMap: {
            // TODO use config for different chains
            [Network.ARBITRUM_GOERLI]: config.rpc_urls_layer2
        },
        defaultChainId: Number(Network[0])
    })
);
DefaultConnectorPayload[0].activate()?.catch(e => {
    // not likely to happen
    console.warn('Default Network Connector activate failed');
    console.warn(e);
});

const connectors: Record<WalletTypeEnum, ReturnType<typeof initializeConnector>> = {
  [WalletTypeEnum.METAMASK]: initializeConnector(actions => new MetaMask({actions})),
  [WalletTypeEnum.WALLET_CONNECT]: initializeConnector(
      actions => new WalletConnect({
          actions,
          options: { // TODO generate from config
              rpc: {
                  [Network.ARBITRUM_GOERLI]: config.rpc_urls_layer2
              }
          }
      })
  ),
  [WalletTypeEnum.COINBASE_WALLET]: initializeConnector(
      // it's fine to keep url (default rpc point) empty
      // https://github.com/coinbase/coinbase-wallet-sdk/blob/master/packages/wallet-sdk/src/CoinbaseWalletSDK.ts#L136
      actions => new CoinbaseWallet({
          actions,
          options: {
              appName: 'LuckyBid',
              url: config.rpc_urls_layer2[0]  // TODO check config
          }
      })
  ),
  [WalletTypeEnum.NETWORK]: DefaultConnectorPayload // TODO complete
}