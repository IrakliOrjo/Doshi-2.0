'use client';
import Link from 'next-intl/link'

import Header from './components/Header'
import Banner from './components/Banner'
import Rolls from './components/Rolls'

import {sushiData} from './data'

import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');
  return (
  <main className="w-full  overflow-hidden flex flex-col">
    <Header />
    <Banner />
    <div className='flex container self-center text-center px-2 items-center min-h-screen bg-[#f5f5f5] flex-col'>
        <h2 className='font-[600] text-black mx-auto text-[2rem] md:text-[4rem] mt-[6em] md:mt-[2.5em] mb-11'>Роллы</h2>
        <p className='text-[1.4rem] text-black font-[500] self-center max-w-[25em] mb-11'>Только свежие продукты и оригинальные рецепты от японских поваров</p>
        <div className='grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12'>
         
         {sushiData[0].content.map(item => {
          return (
            <Rolls key={item.id} item={item} />

          )
         })}
        </div>
        </div>
    
    <div>
    <Link href='/' locale='en'>English</Link>
    <Link href='/' locale='ru'>ru</Link>
    <Link href='/' locale='am'>am</Link>
    </div>
    </main>);
}