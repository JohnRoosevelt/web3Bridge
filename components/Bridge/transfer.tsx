
import ChainSelect from '../ChainSelect'
import './bridge.scss'
import { Button } from "@nextui-org/react";
import { formatEther } from "ethers";
import { useWeb3Context } from "@/context/web3Provider";

export default function BridgeTransfer() {
  const { FromChinas, TargetChinas } = useWeb3Context()
  let data = {
    assets: []
  }
  let fee = {
    nativeFee: 0
  }
  let selectedNFT = ''
  let approved = false
  function onSelectFrom() { }
  function onSelectNFT() { }
  function onSelectTo() { }
  function handleApprove() { }
  function onBridge() { }
  return <div className="w-[640px] flex flex-col justify-between items-center">
    <div className={`w-full  flex flex-col justify-between items-center border-24`}>
      <div className="flex justify-between items-center w-full px-[26px] py-4">
        <ChainSelect label={'Source From'} chains={FromChinas} />
        <Button color="primary">
          connect wallet
        </Button>
      </div>
      <div className={`w-full line`} />
      <div className="px-[26px] py-2 w-full text-sm flex justify-between items-center">
        <div className="opacity-[.45]">Choose an NFT to bridge</div>
        <div>Available NFTs: {data.assets?.length}</div>
      </div>
      <div className={`w-full line`} />
      <div className="w-full p-[26px] flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <img src="/diagram.svg" className="w-24 h-24" />
          <div className="text-xl">
            <div className="font-bold">moonbird</div>
            <div className="mt-2">#1232</div>
          </div>
        </div>
        <img src="./chevron-down.svg" alt="" className="w-6 h-6" />
      </div>
    </div>

    <div className="bg-[#4F4E4E] text-center w-16 h-16 flex justify-center items-center">
      <img src="/change.svg" className="w-10 h-10" />
    </div>

    <div className={`flex justify-between items-center px-[26px] py-4 w-full border-24`}>
      <ChainSelect label={'Target To'} chains={TargetChinas} />
      <Button isDisabled color="primary">
        connect wallet
      </Button>
      {/* <div className="text-[28px]">To</div>
      <div className="w-[180px] h-10 flex justify-between items-center bg-[#1E282B] px-5 rounded-1">
      </div> */}
    </div>

    <div className="w-full text-normal mt-10 flex items-center space-x-2">
      <img src="./gas.svg" alt="" />
      <span>Estimated gas fees </span>
      <span className="text-[#11E095]">{(fee && false) ? new Number(formatEther(fee.nativeFee)).toFixed(6) : "--"} ETH</span>
    </div>

    <div className={`w-full h-12 flex justify-center items-center font-bold text-xl text-[#11E095] border-[#11E095] clickableBorder`}>
      <button disabled={!selectedNFT || approved}>
        approve
      </button>
    </div>

    <div className={`w-full h-12 flex justify-center items-center font-bold text-xl opacity-[.45] border-24`}>
      Bridge NFT to Ethereum
    </div>
  </div>
}