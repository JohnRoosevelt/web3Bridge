import { gql } from '@apollo/client';


export type BidPoolDetailType = {
    id: string,
    totalBids: string,
    collection: string,
    currentRaffleId: string
}

export const GET_BID_POOL_LIST = gql`
    query BidPoolList {
        bidPools {
            id
            totalBids
            collection
            currentRaffleId
        }
    }
`;

export const GET_BID_POOL_DETAIL = gql`
    query BidPoolDetail($id: String!){
        bidPools(where: {id: $id}) {
            id
            totalBids
            collection
            currentRaffleId
        }
    }
`;

export const GET_BID_POOL_DETAIL_BY_ID = gql`
    query BidPoolDetailByID($id: String!){
        bidPool(id: $id) {
            id
            totalBids
            collection
            currentRaffleId
        }
    }
`

export const GET_RAFFLE_LIST = gql`
    query RaffleList($status: [String!]!, $limit:Int, $skip:Int){
        raffles (where: {status_in: $status},first: $limit, skip: $skip, orderBy: drawTime, orderDirection: desc){
            bidPool
            id
            nftTokenId
            raffleId
            start
            end
            status
            winnerNumber
            winner
            drawTime
            price
        }
    }
`;

export const GET_RAFFLE_LIST_BY_ACCOUNT = gql`
    query RaffleList($winner:String, $limit:Int){
        raffles (where: {winner: $winner},first: $limit, orderBy: drawTime, orderDirection: desc){
            bidPool
            id
            nftTokenId
            raffleId
            start
            end
            status
            winnerNumber
            winner
            price
            drawTime
        }
    }
`;

export const GET_RAFFLE_DETAIL = gql`
    query RaffleDetail($id: String!){
        raffles (where: {id: $id}){
            bidPool
            id
            nftTokenId
            raffleId
            start
            end
            status
            winnerNumber
            winner
            drawTime
        }
    }
`;

export const GET_RAFFLE_DETAIL_BY_ID = gql`
    query RaffleDetail($id: String!){
        raffle (id: $id){
            bidPool
            id
            nftTokenId
            raffleId
            start
            end
            status
            winnerNumber
            winner
            drawTime
            price
        }
    }
`;

export const GET_BID_TRANSACTION_LIST = gql`
    query BidTransactions($pools: [String!]!){
        bidTransactions (where:{bidPool_in: $pools}){
            id
            bidPool
            amount
            block
            endBidId
            startBidId
            sender
            time
        }
    }
`;

//TODO  GET_BID_TRANSACTION_LIST for a raffle

export const GET_ASSET_LIST = gql`
    query Assets($owner: String!) {
        assets(where:{
            owner: $owner
        }) {
            owner
            tokenId
            collection
        }
    }
`



