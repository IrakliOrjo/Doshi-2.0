import React,{useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';

import {useTranslations} from 'next-intl';

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const hoverColor = 'd1411e'

const Header = () => {
    const [navMobile, setNavMobile] = useState('')
    const t = useTranslations('Header');

  return (
    <div className='flex items-center fixed z-20 border-b-2 justify-end min-h-[5em] md:min-h-[6em] w-full  md:justify-between md:px-[1em]
     md:bg-white bg-zinc-800 mb-[6em]'>
        <Image 
                className='hidden md:flex h-[45px]'
                src={'/logo.png'} 
                width={200} 
                height={45} 
                alt='doshi logo' />
        <ul className=' gap-x-6 text-[1.2rem] hidden md:flex font-[600]'>
            <li>
                <Link className={`hover:text-[#${hoverColor}] duration-300`} href='#about'>{t('title')}</Link>
            </li>
            <li>
                <Link className={`hover:text-[#d1411e] duration-300`} href='#menu' >Меню</Link>
            </li>
            <li>
                <Link className={`hover:text-[#${hoverColor}] duration-300`} href='#delivery' >Доставка</Link>
            </li>
            <li>
                <Link className={`hover:text-[#${hoverColor}] duration-300`} href='#reviews' >Отзывы</Link>
            </li>
            <li>
                <Link className={`hover:text-[#${hoverColor}] duration-300`} href='#contact' >Контакты</Link>
            </li>
        </ul>
        <div className='hidden lg:flex lg:flex-col'>
            <p className='text-[1.3rem] font-bold'>+374 99 999 999</p>
            <p >Ереван, улица Баграмян</p>
        </div>
        <div 
        onClick={() => setNavMobile(!navMobile)}
        className='md:hidden  self-center'>
            {!navMobile && <AiOutlineMenu className='text-slate-200 bg-opacity-70 rounded-2xl w-12 h-8 cursor-pointer' />}
      {navMobile && <AiOutlineClose className='text-slate-200  bg-opacity-70 rounded-2xl w-12 h-8 cursor-pointer' />}
        </div>
        <div className={`${
            navMobile ? 'h-[220px]' : 'max-h-0'
          } absolute w-full md:hidden  bg-white shadow-lg top-[78px] left-0  overflow-hidden transition-all`}
        >
            <ul className='flex flex-col  py-4 gap-x-6 text-[1.3rem] justify-center items-center font-[600]'>
                <Image 
                className='mb-4'
                src={'/logo.png'} 
                width={200} 
                height={200} 
                alt='doshi logo' />
            <li>
                <Link className={`hover:text-[#${hoverColor}] transition-colors duration-300`} href='#about'>О Нас</Link>
            </li>
            <li>
                <Link className={`hover:text-[#${hoverColor}] transition-colors duration-300`} href='#menu' >Меню</Link>
            </li>
            <li>
                <Link className={`hover:text-[#${hoverColor}] transition-colors duration-300`} href='#delivery' >Доставка</Link>
            </li>
            <li>
                <Link className={`hover:text-[#${hoverColor}] transition-colors duration-300`} href='#reviews' >Отзывы</Link>
            </li>
            <li>
                <Link className={`hover:text-[#${hoverColor}] transition-colors duration-300`} href='#contact' >Контакты</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Header