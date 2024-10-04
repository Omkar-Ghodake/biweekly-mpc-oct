import React from 'react'

const BgVideo = ({ videoSrc, loop }) => {
  return (
    <video className='bg-video fixed top-0 left-0 w-full h-full object-cover' loop={loop} muted autoPlay >
      <source src={videoSrc} type='video/mp4' />
    </video>
  )
}

export default BgVideo
