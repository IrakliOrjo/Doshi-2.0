import React, { useState } from 'react'


import Image from 'next/image'

import {sushiData} from '../data'


import { IoCloseOutline } from 'react-icons/io5'





const Meal = ( {pizza} ) => {


  return (
    <div className='group py-2  px-4 xl:py-4 xl:px-2 rounded-xl'>
      <Image 
      className='lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer '
      width={270} 
      height={270} 
      src={pizza.image} 
      alt='' 
      placeholder="blur"
      blurDataURL={pizza.image} />
      <div>
        <div className='text-xl font-bold mb-3 capitalize cursor-pointer'>{pizza.name}</div>
      </div>
      <div className='text-sm text-font-medium min-h-[60px] mb-6 '>
        {pizza.description}
      </div>
      <div className='mb-6 flex items-center justify-between '>
        <div className='hidden lg:flex text-xl font-semibold'>starts at {pizza.priceSm}</div>
      <button onClick={openModal}
       className='hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm'>
        Choose
        </button>
        <button onClick={openModal} 
        className='btn btn-sm gradient lg:hidden px-3 text-sm '>starts at {pizza.pricesSm}</button>
      </div>
      
    </div>
  )
}

export default Pizza