import ethIcon from "../public/icons/eth.svg";
import solanaIcon from "../public/icons/solana.svg";

export enum Network {
    CHAIN_ID_UNSET = 0,
    ARBITRUM_GOERLI = 421613,
    SOLANA = 1,
}

export enum WalletTypeEnum {
    METAMASK = 'metamask',
    WALLET_CONNECT = 'wallet_connect',
    COINBASE_WALLET = 'coinbase_wallet',
    NETWORK = 'network',
    // OKX = 'okx',
}

export interface ChainInfo {
    id: Network;
    name: string;
    logo: string;
    supportWallet: WalletTypeEnum[];
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    },
    rpcUrls: string[];
    blockExplorerUrls: string[];
}

export const CHAINS_CONFIG: ChainInfo[] = [
    {
        id: Network.ARBITRUM_GOERLI,
        name: 'Arbitrum Goerli',
        logo: ethIcon,
        supportWallet: [WalletTypeEnum.METAMASK],
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
        blockExplorerUrls: ['https://goerli-rollup-explorer.arbitrum.io']
    },
    {
        id: Network.SOLANA,
        name: 'Arbitrum Goerli',
        logo: solanaIcon,
        supportWallet: [WalletTypeEnum.METAMASK],
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
        blockExplorerUrls: ['https://goerli-rollup-explorer.arbitrum.io']
    }
]

export function getChainConfig(chainId: Network) {
    return CHAINS_CONFIG.find(item => item.id === chainId) || {
        id: chainId,
        name: `unknow chain:${chainId}`,
        logo: '',
        supportWallet: [],
        nativeCurrency: {
            name: '',
            symbol: '',
            decimals: 18
        },
        rpcUrls: [],
        blockExplorerUrls: []
    }
}

const config = {
    
}

export default config

