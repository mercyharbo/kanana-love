'use client'

import { motion, Variants } from 'framer-motion'
import NextImage from 'next/image'

export function SuccessStories() {
  const screenshots = [
    '/screenshot (1).jpeg',
    '/screenshot (2).jpeg',
    '/screenshot (3).jpeg',
    '/screenshot (4).jpeg',
    '/screenshot (5).jpeg',
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id='success'
      className='py-24 px-6 sm:px-12 md:px-24 bg-background'
    >
      <div className='max-w-7xl mx-auto flex flex-col gap-16'>
        <div className='max-w-3xl mx-auto text-center space-y-4'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl md:text-5xl font-serif font-bold text-balance leading-tight'
          >
            Senior Leaders Who Have <br className='hidden md:block' />
            <span className='text-primary'>
              Navigated Transition Successfully
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-lg text-muted-foreground'
          >
            Real feedback from executives who regained clarity and signal in
            their job search.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
        >
          {screenshots.map((src, i) => (
            <motion.div
              key={src}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative border border-border shadow-xl shadow-primary/5 transition-all duration-500 group ${
                i === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div className='relative w-full h-full aspect-4/3 md:aspect-auto min-h-[300px] md:min-h-[400px]'>
                <NextImage
                  src={src}
                  alt={`Success Story ${i + 1}`}
                  fill
                  className='object-contain transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
