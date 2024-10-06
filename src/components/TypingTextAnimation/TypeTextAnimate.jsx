import React, { useEffect } from 'react'
import CursorBlinker from './CursorBlinker'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

const TypeTextAnimate = ({ text }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest))

  useEffect(() => {
    const controls = animate(count, text.length, {
      duration: 1,
      ease: 'easeInOut',
      delay: 0.5,
    })
    return controls.stop
  }, [])
  return (
    <span className='flex w-fit items-center'>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  )
}

export default TypeTextAnimate
