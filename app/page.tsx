import Info from "../components/Bridge/info"
import History from "../components/Bridge/history"
import Transfer from "../components/Bridge/transfer"
import { geo } from "./fonts";

export default function Page({ }) {

  return (
    <div className='flex-1 flex justify-center items-center text-white font-biz my-8'>
      <div className="w-[1120px]">
        <div className={`font-geo text-[48px] uppercase ${geo.className}`}>Bridge</div>

        <div className="mt-4 flex justify-between h-[624px]">
          <Info></Info>
          <Transfer></Transfer>
        </div>

        <History></History>
      </div>
    </div>
  )
}
