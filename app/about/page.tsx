import { geo } from "../fonts";

export default function About({ }) {
  return (
    <div className="flex-1 self-center w-full h-full flex items-center justify-center flex-col text-white">
      <div className="flex justify-center">
        <div className="flex flex-col px-14 justify-between">
          <div className={`text-[80px] uppercase font-geo leading-[72px] mt-20 ${geo.className}`}>The layer zero for NFTs</div>
          <div className="text-sm font-biz opacity-[.45] mb-10">NFTZero is the first omnichain NFT infrastructure layer that seamlessly integrates NFT marketplaces, NFT Bridges,and NFT Finance into one powerful super dApp.</div>
          <img src="/arrow.svg" className="w-[144px] h-[8px] mb-10" />
        </div>
        <img src="/code.svg" className="w-160 h-[382px]" />
        
      </div>

      <img src="/diagram.svg" className="w-[1440px] h-[320px]" />
      
    </div>
  )
}
