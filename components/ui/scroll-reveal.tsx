'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale'
  duration?: number
  delay?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  variant = 'slide-up',
  duration = 0.6,
  delay = 0,
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'slide-up': {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    'slide-left': {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
    'slide-right': {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
