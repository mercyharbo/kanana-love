'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { motion, Variants } from 'framer-motion'
import { User } from 'lucide-react'

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className='relative overflow-hidden pt-40 pb-32 px-6 sm:px-12 md:px-24 bg-primary/10'>
      {/* Visual Accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='absolute -top-32 -left-32 size-[500px] bg-primary/20 rounded-full blur-[120px] -z-10'
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        className='absolute top-1/2 -right-32 size-[400px] bg-primary/15 rounded-full blur-[100px] -z-10'
      />
      <div className='absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent' />

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='max-w-4xl mx-auto text-center flex flex-col gap-7 relative'
      >
        <motion.h1
          variants={itemVariants}
          className='text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-foreground text-balance'
        >
          If you’re a VP or senior leader in transition or facing a layoff,
          <br className='hidden md:block' />
          <span className='text-primary block mt-2'>
            your problem isn’t the market.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className='text-xl md:text-2xl text-muted-foreground font-light text-balance'
        >
          It’s that your experience no longer explains itself.
          <br />
          Handle your next move at an executive level.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className='flex justify-center pt-4'
        >
          <Button
            size='lg'
            className='rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 active:scale-95'
          >
            Start with a private fit conversation.
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='mt-16 flex flex-col items-center gap-4'
        >
          <p className='text-sm tracking-widest uppercase text-muted-foreground font-semibold'>
            Trusted by senior leaders across corporate, nonprofit, and
            mission-driven organizations.
          </p>

          <Card className='max-w-2xl bg-secondary/30 border-border p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start text-left shadow-none'>
            <div className='shrink-0 bg-primary/10 p-3 rounded-full'>
              <User className='size-6 text-primary' />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-foreground/80 italic text-pretty'>
                &ldquo;Kanana&rsquo;s expertise in highlighting key strengths
                and achievements, combined with her ability to create a
                compelling and professional presentation, made all the
                difference. Her guidance and support throughout the whole
                process was invaluable, and I&rsquo;m incredibly grateful to her
                for my career success.&rdquo;
              </p>
              <p className='text-sm font-semibold text-primary'>
                — Senior Executive Client
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
