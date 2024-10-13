import React from 'react'
import { IoMdClose } from 'react-icons/io'

const ModalCloseButton = ({ handler }) => {
  return (
    <span
      className='text-3xl ml-auto p-2 fixed top-8 right-12 cursor-pointer hover:bg-blue-500/10 rounded-full duration-150'
      onClick={handler}
    >
      <IoMdClose />
    </span>
  )
}

export default ModalCloseButton
