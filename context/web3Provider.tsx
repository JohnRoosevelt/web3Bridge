'use client'
import React, { useContext, createContext, ReactNode, useReducer, useEffect } from 'react';
import { wormhole } from "@wormhole-foundation/sdk";
import evm from "@wormhole-foundation/sdk/evm";
import solana from "@wormhole-foundation/sdk/solana";
import { CHAINS_CONFIG, ChainInfo, Network, getChainConfig } from "@/config";

interface Datas {
    CHAINS_CONFIG: ChainInfo[],
    FromChinas: ChainInfo[],
    FromChainId: Network,
    FromAddress: '',

    TargetChinas: ChainInfo[],
    TargetChainId: Network,
    TargetAddress: '',
}

const Web3Context = createContext({} as Datas);
const Web3DispatchContext = createContext({});

export const Web3ContextProvider = ({ children }: { children: ReactNode }) => {
    const [datas, dispatch] = useReducer(
        DatasReducer,
        initialDatas
    );
    return (
        <Web3Context.Provider value={datas}>
            <Web3DispatchContext.Provider value={dispatch}> {children} </Web3DispatchContext.Provider>
        </Web3Context.Provider>
    )
}


export const useWeb3Context = () => {
    const data = useContext(Web3Context);
    if (!data || Object.keys(data)?.length === 0) {
        throw new Error(
            'useWeb3Context() can only be used inside of <Web3Context />, ' +
            'please declare it at a higher level.'
        );
    }
    return data;
};

export function useWeb3Dispatch() {
    return useContext(Web3DispatchContext);
}

async function test() {
    const wh = await wormhole("Testnet", [solana], {
        chains: {
            Solana: {
                contracts: {
                    coreBridge: "11111111111111111111111111111",
                },
                rpc: "https://api.devnet.solana.com",
            },
        },
    });
    console.log(wh)
}

async function metamaskconnect(config) {
    console.log({config}, window.ethereum)
    if (!window.ethereum) {
        alert('you must install metamask first')
        return
    }
    const provider = window.ethereum
    const chainId = await provider.request({ method: "eth_chainId" });
    console.log({chainId})
    // provider.on("chainChanged", handleChainChanged);
}

function DatasReducer(datas: Datas, action: any) {
    console.log(action.type)
    switch (action.type) {
        case 'onSelectFrom': {
            datas.FromChinas = datas.TargetChainId === 0 ? datas.CHAINS_CONFIG : datas.CHAINS_CONFIG.filter(item => item.id !== datas.TargetChainId)
            return { ...datas };
        }
        case 'onSelectTarget': {
            console.log(datas.FromChainId, 'onSelectTarget', datas)
            datas.TargetChinas = datas.FromChainId === 0 ? datas.CHAINS_CONFIG : datas.CHAINS_CONFIG.filter(item => item.id !== datas.FromChainId)
            return { ...datas };
        }

        case 'onPickedFrom': {
            datas.FromChainId = action.chainId
            const config = getChainConfig(datas.FromChainId)
            if (config.supportWallet[0] === 'metamask') {
                metamaskconnect(config)
            }
            return { ...datas };
        }
        case 'onPickedTarget': {
            datas.TargetChainId = action.chainId
            return { ...datas };
        }

        case 'changed': {
            return { ...datas };
        }
        case 'deleted': {
            return { ...datas };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialDatas = {
    CHAINS_CONFIG,
    FromChinas: CHAINS_CONFIG,
    FromChainId: 0,
    FromAddress: '',

    TargetChinas: CHAINS_CONFIG,
    TargetChainId: 0,
    TargetAddress: '',
};

