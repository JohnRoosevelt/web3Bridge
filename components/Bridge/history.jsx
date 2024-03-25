import "./bridge.scss";
import { geo } from "../../app/fonts";

export default function BridgeHistory() {
  return <>
    <div className={`font-geo text-[48px] uppercase mt-7 ${geo.className}`}>BRIDGE HISTORY</div>

    <div className={`text-sm history`}>
      <div className='th grid grid-cols-7 justify-center items-center '>
        <div className="bg-[#1E282B] h-8 opacity-[.45]">Collection</div>
        <div className="bg-[#1E282B] h-8 opacity-[.45]">Asset</div>
        <div className="bg-[#1E282B] h-8 opacity-[.45]">From</div>
        <div className="bg-[#1E282B] h-8 opacity-[.45]">Status</div>
        <div className="bg-[#1E282B] h-8 opacity-[.45]">To</div>
        <div className="bg-[#1E282B] h-8 opacity-[.45]">Date</div>
        <div className="bg-[#1E282B] h-8 opacity-[.45]">Brige Fee</div>
      </div>

      {
        [1, 2, 3, 4].map((item, index) => (
          <div className='tr grid grid-cols-7 justify-center items-center' key={index}>
            <div className="h-12">Moon bird</div>
            <div className="h-12 space-x-2">
              <img src="" alt="" className="w-6 h-6" />
              <span>#2312</span>
            </div>
            <div className="h-12">addressxxxx</div>
            <div className="h-12">Pending</div>
            <div className="h-12">xxx</div>
            <div className="h-12">2024.01.01 01:27</div>
            <div className="h-12 space-x-2">
              <span>3,936.0</span>
              <span className="opacity-[.45]">ETH</span>
            </div>
          </div>
        ))
      }
    </div>
  </>
}
