import React from 'react'
import bgVideo from '../assets/intro_bg.mp4'
import BgVideo from '../components/BgVideo'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div>
      <BgVideo videoSrc={bgVideo} loop={true} />

      <div className='h-[85vh] w-screen flex flex-col'>
        <div className='welcome flex justify-center items-center font-mars text-7xl tracking-wide w-fit h-fit mx-auto text-sky-100 py-12'>
          <h2 className='text-center'>WELCOME</h2>
        </div>

        <span className='text-sky-100 text-center text-2xl font-mars'>to</span>

        <div className='product-name text-9xl flex flex-col justify-center items-center space-y-2 font-batman w-fit h-fit mx-auto text-white py-5'>
          <h1 className='text-center drop-shadow-xl tracking-widest font-light'>
            MPC
          </h1>
          <span className='text-3xl'>Member of Parliament's Corner</span>
        </div>

        <div className='w-[40%] mx-auto text-white h-fit font-batman flex flex-col space-y-5 pt-5'>
          <span className='text-center text-2xl text-sky-400'>
            The MP Seva Tracker
          </span>
        </div>

        <Link to={'/activities'} className='flex justify-center items-center'>
          <Button className='mt-16'>EXPLORE</Button>
        </Link>
      </div>
    </div>
  )
}

export default Intro
