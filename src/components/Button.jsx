import React from 'react'

const Button = ({ children, className }) => {
  return (
    <button
      className={`${className} text-sky-400 font-mars border-2 border-white w-fit mx-auto px-8 py-2 text-lg font-bold bg-transparent hover:bg-sky-400/30 duration-150 active:bg-sky-400/40 hover:scale-110`}
    >
      {children}
    </button>
  )
}

export default Button
