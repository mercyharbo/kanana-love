'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'

interface GlowImageProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlowImage({
  children,
  className,
  glowColor = 'var(--color-primary)',
}: GlowImageProps) {
  return (
    <div className={cn('relative group', className)}>
      {/* The Glow Effect */}
      <motion.div
        className='absolute -inset-4 z-0 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40'
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Second Layer of Glow for depth */}
      <motion.div
        className='absolute -inset-8 z-0 rounded-full opacity-10 blur-3xl'
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* The Actual Content */}
      <div className='relative z-10 w-full h-full'>{children}</div>
    </div>
  )
}
