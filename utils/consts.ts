import ethIcon from "../public/icons/eth.svg";
import solanaIcon from "../public/icons/solana.svg";

export const CHAIN_ID_UNSET = 0;
export const CHAIN_ID_SOLANA = 1;
export const CHAIN_ID_ETH = 2;

export interface ChainInfo {
  id: number;
  name: string;
  logo: string;
}

export const CHAINS: ChainInfo[] = [
  {
    id: CHAIN_ID_ETH,
    name: "Ethereum (Goerli)",
    logo: ethIcon,
  },
  {
    id: CHAIN_ID_SOLANA,
    name: "Solana",
    logo: solanaIcon,
  },
]

export const CHAINS_WITH_NFT_SUPPORT = CHAINS.filter(
  ({ id }) =>
    id === CHAIN_ID_ETH ||
    id === CHAIN_ID_SOLANA
);





