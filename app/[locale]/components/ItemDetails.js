'use client'

import React,{useState, useEffect, useContext} from 'react'

import Image from 'next/image'

import {useLocale} from 'next-intl';
import {useTranslations} from 'next-intl';
//context
import { CartContext } from '../context/CartContext'

const ItemDetails = ({ item, setModal }) => {
//pizza site state
 
//pizza topping state
    console.log('item',item)
  // additional topping price
 const [size, setSize] = useState('small')
// pizza crust state
  const [crust, setCrust] = useState('traditional')
//pizza topping state
  const [additionalTopping, setAdditionalTopping] = useState([])
  // additional topping price
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0)

  const [price, setPrice] = useState(0)


  const { addToCart } = useContext(CartContext)

  const defaultLocale = useLocale();

 const t = useTranslations('ItemDetails');

  //set additional topping price

  

  return (
    <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8'>
      <div className='lg:flex-1 flex justify-center items-center'>
        <div className='max-w-[300px] lg:max-w-none mt-6 lg:mt-0'>
          <Image width={450} height={450} src={item.image} alt='sushi' 
          priority={1} className='mx-auto relative' />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex-1 p-2 text-center lg:text-left '>
          <div className='flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2 '>
            <div className='font-semibold'>
              <h2 className='capitalize text-3xl mb-6'>{item.name}</h2>
            <div className='mb-6  '>
              <p className='font-normal'>{item[`content${defaultLocale}`]}</p>
            </div>
            </div>
           
           
            
            <div className='flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start'>
             
            </div>
          </div>
        </div>
        {/*add to cart btn */}
        <div className='h-full flex items-center px-2 lg:items-end '>
          <button 
          onClick={() =>
            {
            addToCart(
               item.id, 
               item.image, 
               item.name, 
               item.price       
               ),
               setModal(false)
            }
          } 
          className='btn btn-lg gradient w-full flex justify-center gap-x-2 '>
            <div>{t('cart')}</div>
            <div>AMD {item.price}</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails