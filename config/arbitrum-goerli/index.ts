import ABI_BIDS from '@/config/abis/Bids.json'

export default {
    'chain2': {
        chainId: 421613,
        description: 'arbitrum goerli; layer2',
        publicJsonRPCUrl: [
            // TODO add more urls with key
            'https://goerli-rollup.arbitrum.io/rpc',
            //'https://arb-goerli.g.alchemy.com/v2/EsoO908NROufzfIkoGpPjrR8cXB7fO3b',
        ],
        contracts: {
            Tickets: "0xF84157816E078B168af761bA7dACab0Ad8faaA89",
            WhitlistNFT: '0x9ec0cc538e6328391fb77664d14e70ba9db6759c',
            WETH: "0x014c85f61aaF3e6806e1E46AfFAA0e6E7e7EC3a1",
        }
    },
    'chain1': {
        chainId: 5,
        description: 'ethereum goerli',
        publicJsonRPCUrl: [],
        contracts: {
            BAYCRaffles: "",
            MAYCRaffles: "",
            AZUKIRaffles: "",
            EthereumEndpoint: "",
        }
    },

    'collections': [
        {
            "name": "Bored Ape Yacht Club",
            "symbol": "BAYC",
            "address": "0x7c80C53f63088F3F63A0D64Caa4bf1D5c3CED123",
            "nft": "0x7c80C53f63088F3F63A0D64Caa4bf1D5c3CED123",
            "onft721": "0xe21e934125a0544CF3d4353aB742DDb04E984EF6",
            "proxyONFT721": "0x27Ec471A96172dB20Ba4f8A60Fb41eDa2f3d5a76",
            "bidPool": "0x99AA8054e8A726f745E9DB98eC6Fa0820e2dd5CC",
            "raffles": "0xf1ddd8a6165c1bcBf52dDD82994E3d72A85C0098",
            // address: arbitrum_goerli_config.chain2.contracts.BAYCBids, // TODO user bidPool
            // nft: "0x93ea12c821035abf35c747e4c6e2316c3a900b4b", // TODO use address
            // onft: "0x78e3aCC9a155CFC676955A78A6A90d3aD4284A56", // TODO use onft721
            // name: 'BAYC',
            // nameFull: 'Bored Ape Yacht Club',
            collectionAPI: 'https://test-api.luckybid.xyz/collection/bored-ape-yacht-club-69',
            openseaSlug: 'bored-ape-yacht-club-69',
            nftImgUrl: 'https://i.seadn.io/gae/BungneZkdv1B3jDLsEkIyDIyPbGzCa13z9hOUfHgefDXOJVhR31M2tGKCsDHesTQ1TrMQuLEHSu1_nuUmKt401MiZT0Fq0Y-Ng8i?auto=format&w=1000',
            placeHolderImgUrl: '/placeholder-bayc.svg',
            link_website: "https://yuga.com/",
            link_twitter: "https://twitter.com/yugalabs",
            link_opensea: "https://testnets.opensea.io/collection/bored-ape-yacht-club-69",

            abi: ABI_BIDS,
        },

        {
            "name": "Mutant Ape Yacht Club",
            "symbol": "MAYC",
            "nft": "0x2F77DD11c6Cd2851D099068898767649d3c46b87",
            "onft721": "0xE4b88c7d6AC21e3630F22519D08FFA7cd94158Bc",
            "proxyONFT721": "0xeD98893d3D697157Bc23510B474d3666eDDfa880",
            "bidPool": "0x885FBfD057D0eb1a4764CF0846550727BcaDAdAb",
            "raffles": "0x8BB6A907e59A434A5b52D7f1B5F87f935949335a",

            collectionAPI: 'https://test-api.luckybid.xyz/collection/mutant-ape-yacht-club-13',
            openseaSlug: 'mutant-ape-yacht-club-13',
            nftImgUrl: 'https://i.seadn.io/gcs/files/d079b26c8d5df6d7081d5e9db045aaf5.png?auto=format&w=750',
            placeHolderImgUrl: '/placeholder-mayc.svg',
            link_website: "https://yuga.com/",
            link_twitter: "https://twitter.com/yugalabs",
            link_opensea: "https://testnets.opensea.io/collection/mutant-ape-yacht-club-13",

            abi: ABI_BIDS,
        },
        {
            "name": "Azuki",
            "symbol": "AZUKI",
            "nft": "0x9baF0f8620091F7f705C3F304558438C5103E02b",
            "onft721": "0xF1150F52EAc1C7325013A0754fD7262900a6aE86",
            "proxyONFT721": "0x5B23c5D420718eadE7c2F1Be416Ab7CC2641394E",
            "bidPool": "0xF18c5304100e3873aF562AA2006df984cE8d25C5",
            "raffles": "0x5c64cC79dCA4250986ae6BB0CE854C8856b2784D",

            collectionAPI: 'https://test-api.luckybid.xyz/collection/azuki-149',
            openseaSlug: 'azuki-149',
            nftImgUrl: 'https://i.seadn.io/gcs/files/dd504df04aac0ec73c2509abc049357b.png?auto=format&w=3840',
            placeHolderImgUrl: '/placeholder-azuki.svg',
            link_website: "https://www.azuki.com",
            link_twitter: "https://twitter.com/Azuki",
            link_opensea: "https://testnets.opensea.io/collection/azuki-149",

            abi: ABI_BIDS,
        },
        {
            "name": "Beanz",
            "symbol": "BEANZ",
            "nft": "0x9279aE187b17D5bFc6b26fa6a240b1C580538dFb",
            "onft721": "0x73ee94FC387cd601157627755bbE685e8DE9b328",
            "proxyONFT721": "0x556D682Dc7D321bFc1FEeCFFC2fCf7281C949F0a",
            "bidPool": "0xdF7906E11866Dc614b5bE20321671De4f3FC66E0",
            "raffles": "0xDf3961A5C5afcCf3165dB186608EDB8e31DE49EE",

            collectionAPI: 'https://test-api.luckybid.xyz/collection/beanz-10',
            openseaSlug: 'beanz-10',
            nftImgUrl: 'https://i.seadn.io/gcs/files/2e76856f21cd9ffd9eb1ec7b4ee45fc3.png?auto=format&w=750',
            placeHolderImgUrl: '/placeholder-beans.svg',
            link_website: "",
            link_twitter: "",
            link_opensea: "https://testnets.opensea.io/collection/beanz-10",

            abi: ABI_BIDS,
        },
        // {
        //     "name": "Doodles",
        //     "symbol": "DOODLES",
        //     "nft": "0xC48E4BAfB15d71902426b45CFb504695eDF41Ba0",
        //     "onft721": "0x1263A957DB914a5648eF27B8c16656Fe516F8a71",
        //     "proxyONFT721": "0x044465681fd5fE682FaF911CbFa68CB45557339D",
        //     "bidPool": "0x4f6CfaE7102671f21503D35c474DA07f1a5E4e38",
        //     "raffles": "0x144Fe0c026770eC67Cb7A3EE62ccE0a1FCB9B25c",
        //
        //     collectionAPI: 'https://test-api.luckybid.xyz/collection/doodles-101',
        //     openseaSlug: 'doodles-101',
        //     nftImgUrl: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=384',
        //     placeHolderImgUrl: '/placeholder-doodles.svg',
        //     link_website: "",
        //     link_twitter: "",
        //     link_opensea: "https://testnets.opensea.io/collection/doodles-101",
        //
        //     abi: ABI_BIDS,
        // },
        {
            "name": "Moonbirds",
            "symbol": "MOONBIRD",
            "nft": "0x7d0218571dAb25bfB97e7a700281633F8B0FE6b2",
            "onft721": "0xa95132E0932d8EBf623681E67eBBA09bFD310B0e",
            "proxyONFT721": "0xB1495CFaa371B0AC14E74e3fA01058a01fcD391B",
            "bidPool": "0x83B99Fb199a257bb5d83B2701670158e96D5A4c5",
            "raffles": "0x149E8AE2C226eEAa69A6eA9Ba39D93D773Ca1ca2",

            collectionAPI: 'https://test-api.luckybid.xyz/collection/moonbirds-38',
            openseaSlug: 'moonbirds-38',
            nftImgUrl: 'https://i.seadn.io/gcs/files/fd08b4a340be10b6af307d7f68542976.png?auto=format&w=750',
            placeHolderImgUrl: '/placeholder-moonbirds.svg',
            link_website: "",
            link_twitter: "",
            link_opensea: "https://testnets.opensea.io/collection/moonbirds-38",


            abi: ABI_BIDS,
        },
        {
            "name": "Otherdeed",
            "symbol": "OTHR",
            "nft": "0x4e1eD7A3f404108321Dd6b44581042Bf9d79E793",
            "onft721": "0x93AF1c3720305cF77f124FdB7FB4Dd9AdDC81ACF",
            "proxyONFT721": "0x4c236ebAFb38F5F9DD1644102B70283b5e709315",
            "bidPool": "0x7CAf4BbE0C9559f5eD5767F96bE1A15040EfFe2d",
            "raffles": "0x67f597594CaE9d5001382bDeAeD2F5Db0376310a",

            collectionAPI: 'https://test-api.luckybid.xyz/collection/otherdeed-13',
            openseaSlug: 'otherdeed-13',
            nftImgUrl: 'https://i.seadn.io/gcs/files/d4120601217d8d41046c23b29c154d6a.jpg?auto=format&w=750',
            placeHolderImgUrl: '/placeholder-otherdeed.svg',
            link_website: "",
            link_twitter: "",
            link_opensea: "https://testnets.opensea.io/collection/otherdeed-13",

            abi: ABI_BIDS,
        },
        {
            "name": "PudgyPenguins",
            "symbol": "PPG",
            "nft": "0x1C20162844F9BDefaB0fb39C56c7BB882fe90512",
            "onft721": "0x8b881183519ef26a8b1Ca36F65D5b8015Ff74BdE",
            "proxyONFT721": "0xFaEe9a89a5b14F40B33A70acd86F41313472a053",
            "bidPool": "0x077e1C9023892654F7E1167be7f83ec1c7BC62B9",
            "raffles": "0x49231bD4154967E02555E3712f024e88CcDc4E74",

            collectionAPI: 'https://test-api.luckybid.xyz/collection/pudgy-penguins-3',
            openseaSlug: 'pudgy-penguins-3',
            nftImgUrl: 'https://i.seadn.io/gcs/files/7ee37891f12b7ef313bcb655e8b09790.png?auto=format&w=750',
            placeHolderImgUrl: '/placeholder-penguins.svg',
            link_website: "",
            link_twitter: "",
            link_opensea: "https://testnets.opensea.io/collection/pudgy-penguins-3",

            abi: ABI_BIDS,
        }
    ]
}
