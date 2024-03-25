import { Geo, BIZ_UDGothic } from 'next/font/google'
 
export const geo = Geo({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})
 

export const biz = BIZ_UDGothic({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
