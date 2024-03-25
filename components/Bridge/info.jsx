import './bridge.scss'

export default function NFTInfo() {
  return <>
    <div className={`w-[448px] flex flex-col items-center border-24`}>
      <img src="/diagram.svg" className="w-[384px] h-[384px] m-[32px]" />

      <div className={`w-full line`} />
      <div className="flex justify-around items-center flex-col px-8 w-full flex-1 p-[26px] text-xs">
        <div className="flex justify-between items-center w-full">
          <div className="opacity-[.45] text-xs">Collection</div>
          <div> - </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="opacity-[.45] text-xs">ID</div>
          <div> - </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="opacity-[.45] text-xs">chain</div>
          <div> - </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="opacity-[.45]">Items</div>
          <div> - </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="opacity-[.45]">Contract address</div>
          <div> - </div>
        </div>
      </div>
    </div>
  </>
}