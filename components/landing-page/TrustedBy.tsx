'use client'

import { motion } from 'framer-motion'

export function TrustedBy() {
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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className='py-24 px-6 sm:px-12 md:px-24 bg-background border-t border-border'>
      <div className='max-w-4xl mx-auto flex flex-col gap-16 text-center'>
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

        {/* Logos Placeholder */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500'
        >
          {/* Replace with actual logos */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className='h-12 bg-muted/50 rounded flex items-center justify-center text-xs text-muted-foreground/50 font-mono'
            >
              LOGO {i}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='max-w-2xl mx-auto bg-primary/5 border border-primary/10 rounded-2xl p-8 space-y-4'
        >
          <h2 className='font-semibold text-primary'>
            A subtle note on fit and timing
          </h2>
          <p className='text-sm text-foreground/80'>
            This work is intentionally one-to-one, and designed for leaders
            ready to move with clarity.
          </p>
          <p className='text-sm text-foreground/80'>
            If you’re still exploring options, this may not be the right moment.
            <br />
            If you’re ready to proceed deliberately, the next step is a private
            fit conversation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
