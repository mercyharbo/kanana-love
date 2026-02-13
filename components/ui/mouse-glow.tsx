'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function MouseGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the motion
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className='pointer-events-none fixed inset-0 z-10 opacity-30 h-screen w-screen'
      style={{
        background: `radial-gradient(600px circle at var(--x) var(--y), rgba(var(--primary-rgb), 0.15), transparent 40%)`,
      }}
    >
      <motion.div
        className='absolute inset-0'
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, var(--color-primary), transparent 40%)`,
          opacity: 0.15,
        }}
      />
    </motion.div>
  )
}
