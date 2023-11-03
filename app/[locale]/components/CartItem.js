import React, {useContext} from 'react'

import Image from 'next/image'

import {BiPlus, BiMinus} from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'

//context
import { CartContext } from '../context/CartContext'

const CartItem = ({item}) => {

 const {removeItem, increaseAmount, decreaseAmount} = useContext(CartContext)
  
 return (
    <div className='select-none'>
      <div className='flex gap-x-4 mb-2 '>
        {/*image */}
        <div className='flex justify-center items-center '>
          <Image src={item.image} width={90} height={90} alt='' />
        </div>
        {/*Pizza info*/}
        <div className='flex-1 flex flex-col gap-y-1 '>
           {/*name*/}
           <div className='text-lg capitalize font-bold '>{item.name}</div>
           <div className='flex flex-col gap-y-1 '>
             
             {/*quantity controls*/}
              <div className='flex items-center gap-x-1'>
                {/*decrease quantity*/}
                <div 
                onClick={() => decreaseAmount(item.id, item.price)} 
                className='w-[18px] h-[18px] flex justify-center items-center 
                cursor-pointer text-black gradient rounded-full '>
                  <BiMinus />
                </div>
                {/*pizza amount*/}
                <div className='font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm '>
                  {item.amount}
                  </div>
                {/*increase quantity*/}
                <div 
                onClick={() => increaseAmount(item.id, item.price)}
                className='w-[18px] h-[18px] flex justify-center items-center 
                cursor-pointer text-black gradient rounded-full '>
                  <BiPlus />
                </div>
              </div>
           </div>
        </div>
        <div className='flex flex-col justify-between '>
          {/*remove item*/}
          <div onClick={() => removeItem(item.id, item.price)} className='text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 duration-100 transition-all text-orange'>
            <IoCloseOutline />
          </div>
          {/*price*/}
          <div>
            <span className='text-[17px] font-medium font-robotoCondensed'>
              AMD {parseFloat(item.price * item.amount).toFixed(2)}</span>
          </div>
        </div>
      </div>
      {/*toppings*/}
      <div className='flex flex-wrap items-center gap-3 p-6 border-b border-black/10 '>
        
       
      </div>
    </div>
  )
}

export default CartItem