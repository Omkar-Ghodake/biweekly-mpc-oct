import React from 'react'

const BgVideo = ({ videoSrc, loop }) => {
  return (
    <video className='bg-video fixed h-full' loop={loop} muted autoPlay >
      <source src={videoSrc} type='video/mp4' />
    </video>

  )
}

export default BgVideo
