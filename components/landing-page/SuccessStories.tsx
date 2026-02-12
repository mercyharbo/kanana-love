'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export function SuccessStories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className='py-24 px-6 sm:px-12 md:px-24 bg-background'>
      <div className='max-w-7xl mx-auto flex flex-col gap-12'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl font-sans font-medium text-center text-balance'
        >
          Senior Leaders Who Have Navigated Transition and Layoff Successfully
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className='group relative aspect-video bg-muted rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center justify-center'
            >
              <div className='absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors' />
              <div className='size-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform'>
                <Play
                  className='size-5 text-primary ml-1'
                  fill='currentColor'
                />
              </div>
              <span className='sr-only'>Play Video Testimonial {i}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
