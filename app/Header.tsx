'use client'
import Image from "next/image";
import { usePathname } from 'next/navigation';
import styles from './Header.module.css'


export default function Nav() {
    const pathname = usePathname()

    const links = [
        { href: '/', name: 'bridge' },
        {href: '/token', name: 'token'},
        // {href: '/scan', name: 'NFTZeroScan'},
        // {href: '/socials', name: 'SOCIALS'},
        { href: '/about', name: 'ABOUT' },
    ]

    return <div className={`w-full h-16 flex justify-between px-10 bg-[#0B0514] sticky top-0 z-9 ${styles.wrap}`}>

        <div className='flex items-center h-full flex-1'>
            <a href='/' target='_blank'>
                <Image
                    src="/logo.svg"
                    alt="NFT zero Logo"
                    width={107}
                    height={40}
                    priority
                />
            </a>

            {JSON.stringify(usePathname)}

            {
                <div className='font-normal font-biz text-sm text-white uppercase flex-1 flex space-x-7 mx-20'>
                    {
                        links.map((link, index) => (
                            pathname == link.href ? (
                                <a key={index} href={link.href} className='items-center font-semibold'>
                                    {link.name}
                                    {/* <div className='active-indicator'></div> */}
                                </a>
                            ) : (
                                <a key={index} href={link.href} className='opacity-[.45]'>
                                    {link.name}
                                </a>
                            )
                        ))
                    }
                </div>
            }
        </div>
    </div>
}
