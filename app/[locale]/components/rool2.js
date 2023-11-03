import React,{ useState } from 'react'
import Image from 'next/image'

import {useTranslations} from 'next-intl';

import Modal from 'react-modal'

import ItemDetails from './ItemDetails'

import { IoCloseOutline } from 'react-icons/io5'

import {useLocale} from 'next-intl';
import {sushiData} from '../data'

//bind modal to body
Modal.setAppElement('body');

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.06)',
  },
}



const Rolls = ( {item} ) => {

     const defaultLocale = useLocale();


     const t = useTranslations('Menu');

    
     
      const [modal, setModal] = useState(false)
  
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
    
  return (
    <div className='flex container self-center text-center px-2 items-center min-h-screen bg-[#f5f5f5] flex-col'>
        <h2 className='font-[600] text-black mx-auto text-[2rem] md:text-[4rem] mt-[6em] md:mt-[2.5em] mb-11'>Роллы</h2>
        <p className='text-[1.4rem] text-black font-[500] self-center max-w-[25em] mb-11'>Только свежие продукты и оригинальные рецепты от японских поваров</p>
        <div className='grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12'>
         {sushiData[0].content.map(item => {
            return (
                {/*<div key={item.id} className='flex mb-14 flex-col h-[23.5em] md:min-w-[25em] lg:min-w-[20em] xl:w-[23em]
                   text-center justify-center items-center'>
                    <Image className='w-full max-w-[320px]  mb-2' src={item.image} width={200} height={250} />
                    <p className='font-[500]  max-w-[11.4em]'>{item.name}</p>
                    <p className='text-[0.8rem] '>{item[`content${defaultLocale}`]}</p>
                    <p className='text-[0.8rem] mb-4'>${item.price}</p>
                    <button className='bg-red-500 hover:bg-red-800 duration-300 text-white font-[500] rounded-md h-[50px] md:w-[8em] w-[13em]'>Заказать</button>
            </div> */},
            <div className='group py-2  px-4 xl:py-4 xl:px-2 rounded-xl'>
      <Image
      onClick={openModal} 
      className='lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer '
      width={270} 
      height={270} 
      src={item.image}
      alt='' 
      placeholder="blur"
      blurDataURL={item.image} />
      <div>
        <div className='text-xl text-left font-bold mb-3 capitalize cursor-pointer'>{item.name}</div>
      </div>
      <div className='text-sm text-font-medium text-left min-h-[60px] mb-6 '>
        {item[`content${defaultLocale}`].length > 80
  ? (
    <span>
      {`${item[`content${defaultLocale}`].slice(0, 80)} `}
      <p className='text-red-400 inline'>{t('more')}</p>
    </span>
  )
  : item[`content${defaultLocale}`]
}
      </div>
      <div className='mb-6 flex items-center justify-between '>
        <div className='hidden lg:flex text-xl font-semibold'> {item.price}</div>
      <button
       onClick={openModal} 
       className='hidden lg:flex gradient bg-purple-700 text-red-800 rounded-lg btn-sm font-semibold text-sm'>
        Choose
        </button>
        <button
        onClick={openModal} 
        className='btn btn-sm gradient lg:hidden px-3 text-sm '>{item.price}</button>
      </div>
       {modal && <Modal isOpen={modal} 
      style={modalStyles} 
      onRequestClose={closeModal} 
      contentLabel='Item Modal'
      className='bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px]
      lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none  '
      >
      <div onClick={closeModal} className='absolute z-30 right-2 top-2 hover:scale-110 cursor-pointer '>
        <IoCloseOutline className='text-4xl text-orange ' />
      </div>
     <ItemDetails item={item} modal={modal} setModal={setModal} />
      </Modal>}
    </div>
            )
         })}
        </div>
    </div>
  )
}

export default Rolls