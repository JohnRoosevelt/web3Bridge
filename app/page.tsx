'use client'
import Info from "../components/Bridge/info"
import History from "../components/Bridge/history"
import Transfer from "../components/Bridge/transfer"
import { geo } from "./fonts";
import FromWalletModal from "@/components/FromWalletModal";
import React, { useState } from 'react';

export default function Page({ }) {
  const [open, setOpen] = useState(false);
  function onModalOpen () {
    setOpen(true)
  }
  function onModalClose () {
    setOpen(false)
  }
  return (
    <div className='flex-1 flex justify-center items-center text-white font-biz my-8'>
      <div className="w-[1120px]">
        <div className={`font-geo text-[48px] uppercase ${geo.className}`}>Bridge</div>

        <div className="mt-4 flex justify-between h-[624px]">
          <Info></Info>
          <Transfer></Transfer>
        </div>

        <History></History>

        <FromWalletModal open={open} onModalOpen={onModalOpen} onModalClose={onModalClose} />
        <button onClick={onModalOpen}>Open Modal</button>
      </div>
    </div>
  )
}
