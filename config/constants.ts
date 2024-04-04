

export enum RAFFLE_STATUS {
    Unpurchased='Unpurchased',
    Purchasing='Purchasing',
    Purchased='Purchased',
    Upcoming="Upcoming",
    Drawing='Drawing',
    Drawn='Drawn',
    Claimed='Claimed'
}

export const RAFFLE_STATUS_LABEL = {
    0:RAFFLE_STATUS.Unpurchased,
    1:RAFFLE_STATUS.Purchasing,
    2:RAFFLE_STATUS.Purchased,
    3:RAFFLE_STATUS.Upcoming,
    4:RAFFLE_STATUS.Drawing,
    5:RAFFLE_STATUS.Drawn,
    6:RAFFLE_STATUS.Claimed
}

type RafleStatusNum = 0|1|2|3|4|5|6

export type RaffleInfoType = {
    start:number |string
    end:number |string
    winnerNumber:number |string
    tokenId:number |string
    status:RafleStatusNum
}

export type RaffleInfoTheGraph ={
    id:string
    bidPool:string
    drawTime:number | string
    nftTokenId: number | string
    raffleId: number | string
    winnerNumber: number |string
    status: RafleStatusNum
}
