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
}

export default Rolls