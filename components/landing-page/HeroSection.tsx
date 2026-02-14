'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GlowImage } from '@/components/ui/glow-image'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { motion, Variants } from 'framer-motion'
import NextImage from 'next/image'
import NextLink from 'next/link'

export function HeroSection() {
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
    <section className='relative overflow-hidden pt-60 pb-32 px-6 sm:px-12 md:px-24 bg-primary/10'>
      <ScrollReveal variant='fade' duration={1.2}>
        <div className='max-w-7xl mx-auto text-center flex flex-col gap-7 relative'>
          <motion.h1
            variants={itemVariants}
            className='text-4xl/tight md:text-5xl/tight lg:text-6xl/tight font-sans font-medium text-foreground '
          >
            If you’re a VP or mid-senior leader facing a layoff or transition,
            <br className='hidden md:block' />
            <span className='text-primary block mt-2'>
              Your problem is not the job market.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='text-base md:text-2xl text-muted-foreground text-balance'
          >
            It’s that your experience no longer explains itself. And applying to
            more jobs is not the solution. Handle your next move at an executive
            level.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='flex justify-center pt-4'
          >
            <Button
              asChild
              size='lg'
              className='rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 active:scale-95'
            >
              <NextLink
                href='https://calendly.com/kananaloveresumes/executive-transition-fit-conversation/2026-02-14T09:00:00-06:00'
                target='_blank'
                rel='noopener noreferrer'
              >
                Start with a private fit conversation.
              </NextLink>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='mt-16 flex flex-col items-center gap-5'
          >
            <p className='text-sm tracking-widest max-w-2xl uppercase text-muted-foreground font-semibold'>
              Trusted by senior leaders across corporate, nonprofit, and
              mission-driven organizations.
            </p>

            <div className='relative group'>
              {/* Card background glow */}
              <div className='absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

              <Card className='max-w-2xl bg-card border-border/50 p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-start text-left shadow-xl shadow-primary/5 transition-all duration-300 relative overflow-hidden'>
                {/* Visual Accent */}
                <div className='absolute top-0 right-0 p-6 opacity-10'>
                  <svg
                    className='size-12 text-primary'
                    fill='currentColor'
                    viewBox='0 0 32 32'
                  >
                    <path d='M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z' />
                  </svg>
                </div>

                {/* Profile Portrait */}
                <div className='shrink-0 relative'>
                  <GlowImage className='size-20 rounded-2xl overflow-hidden border border-border shadow-sm'>
                    <NextImage
                      src='/dominica.jpg'
                      alt='Daunmonique McCloud'
                      fill
                      className='object-cover grayscale hover:grayscale-0 transition-all duration-700'
                    />
                  </GlowImage>
                </div>

                <div className='flex flex-col gap-6 relative z-10'>
                  <p className='text-lg text-foreground/90 font-medium italic text-pretty leading-relaxed'>
                    &ldquo;Kanana&rsquo;s expertise in highlighting key
                    strengths and achievements, combined with her ability to
                    create a compelling and professional presentation, made all
                    the difference. Her guidance and support throughout the
                    whole process was invaluable, and I&rsquo;m incredibly
                    grateful to her for my career success.&rdquo;
                  </p>

                  <div className='flex flex-col gap-1'>
                    <div className='h-px w-12 bg-primary/30 mb-2' />
                    <p className='text-base font-bold text-primary'>
                      Daunmonique McCloud, MBA
                    </p>
                    <p className='text-sm text-muted-foreground font-medium'>
                      Regional Operational Manager at Zurich North America
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  )
}
