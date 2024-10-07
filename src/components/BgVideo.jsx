import React from 'react'
import { useLocation } from 'react-router-dom'

const BgVideo = ({ videoSrc, loop }) => {
  const { pathname } = useLocation()

  return (
    <video
      className={`bg-video fixed fixed h-full ${pathname !== '/' && 'brightness-75'}`}
      loop={loop}
      muted
      autoPlay
    >
      <source src={videoSrc} type='video/mp4' />
    </video>
    // </video>

  )
}

export default BgVideo
