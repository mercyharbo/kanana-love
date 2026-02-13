'use client'

import { motion, Variants } from 'framer-motion'
import NextImage from 'next/image'

export function TrustedBy() {
  const logos = Array.from({ length: 20 }, (_, i) => `/logo (${i + 1}).jpeg`)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className='py-24 px-6 sm:px-12 md:px-24 bg-background border-t border-border'>
      <div className='max-w-6xl mx-auto flex flex-col gap-16 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-4'
        >
          <h2 className='text-sm font-semibold tracking-widest text-primary uppercase'>
            Trusted by Senior Leaders
          </h2>
          <p className='text-xl md:text-2xl text-muted-foreground text-balance'>
            I work with experienced professionals navigating high-stakes
            transitions across corporate, nonprofit, and mission-driven
            organizations.
          </p>
          <p className='text-foreground font-medium'>
            My clients have moved into senior and leadership roles at
            organizations ranging from global enterprises to fast-growing teams.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 items-center'
        >
          {logos.map((src, i) => (
            <motion.div
              key={src}
              variants={itemVariants}
              className='relative h-12 w-full flex items-center justify-center'
            >
              <NextImage
                src={src}
                alt={`Partner Logo ${i + 1}`}
                fill
                className='object-contain'
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
