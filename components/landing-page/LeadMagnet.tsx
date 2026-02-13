'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function LeadMagnet() {
  return (
    <section
      id='assessment'
      className='py-28 px-6 sm:px-12 md:px-24 bg-background relative overflow-hidden flex flex-col items-center gap-16'
    >
      <div className='max-w-3xl w-full flex flex-col gap-24 relative z-10'>
        {/* Part 1: Note on Fit and Timing - The Primary Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='relative group flex flex-col'
        >
          {/* Enhanced Decorative Glow */}
          <div className='absolute -inset-1.5 bg-linear-to-r from-primary/30 via-primary/5 to-indigo-500/30 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-300' />

          <div className='relative bg-linear-to-b from-card to-background border border-primary/20 rounded-[2.25rem] p-10 md:p-14 space-y-10 shadow-2xl shadow-primary/5 overflow-hidden'>
            {/* Glass decoration */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16' />

            <div className='flex flex-col items-center text-center space-y-6'>
              <h2 className='text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight text-balance'>
                A subtle note on fit and timing
              </h2>
              <div className='bg-linear-to-r from-transparent via-primary/20 to-transparent h-px w-32' />
              <p className='text-lg md:text-xl text-foreground font-medium leading-relaxed text-pretty max-w-xl'>
                This work is intentionally one-to-one, and designed for leaders
                ready to move with clarity.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
              <div className='p-8 rounded-3xl bg-secondary/30 border border-border/50 text-left flex flex-col gap-3 transition-colors hover:bg-secondary/50'>
                <p className='text-[15px] text-muted-foreground leading-relaxed text-pretty'>
                  If you&rsquo;re still exploring options, this may not be the
                  right moment.
                </p>
              </div>
              <div className='p-8 rounded-3xl bg-primary/5 border border-primary/30 text-left flex flex-col gap-3 shadow-xs transition-all hover:bg-primary/10 group/item'>
                <p className='text-[15px] text-foreground font-semibold leading-relaxed text-pretty'>
                  If you&rsquo;re ready to proceed deliberately, the next step
                  is a
                  <Link
                    href='https://calendly.com/kananaloveresumes/resume-cover-letter-linkedin-revamp?preview_source=et_card&month=2024-12&date=2024-12-30'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary font-bold hover:underline decoration-primary/40 underline-offset-4 transition-all ml-1 inline-flex items-center gap-1'
                  >
                    private fit conversation
                    <ArrowRight className='size-3 translate-y-px opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all' />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Connector / Separator */}
        <div className='flex flex-col items-center gap-4 py-4 opacity-40'>
          <div className='w-px h-12 bg-linear-to-b from-primary/40 to-transparent' />
          <span className='text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground'>
            Alternative Path
          </span>
          <div className='w-px h-12 bg-linear-to-t from-primary/40 to-transparent' />
        </div>

        {/* Part 2: Lead Magnet - The Exploratory Path */}
        <div className='flex flex-col items-center gap-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center space-y-4'
          >
            <h3 className='text-2xl md:text-3xl font-serif font-medium text-foreground tracking-tight text-balance'>
              Not ready to decide yet?
            </h3>
            <p className='text-muted-foreground text-balance text-lg max-w-xl mx-auto'>
              If you want to pressure-test how your experience is being
              interpreted before committing, start here instead.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='w-full'
          >
            <Card className='w-full relative overflow-hidden border-none shadow-2xl shadow-primary/10 rounded-[2.5rem] bg-linear-to-br from-primary via-primary to-indigo-700 text-white'>
              {/* Premium Glass Effect */}
              <div className='absolute inset-0 bg-white/5 pointer-events-none' />
              <div className='absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 blur-3xl rounded-full' />

              <CardHeader className='pb-8 pt-12 px-8 md:px-14 relative z-10'>
                <div className='space-y-4 text-center md:text-left'>
                  <CardTitle className='text-2xl md:text-4xl font-serif font-bold tracking-tight text-balance leading-tight'>
                    Executive Signal Self-Assessment
                  </CardTitle>
                  <CardDescription className='text-lg md:text-xl text-white/80 text-pretty leading-relaxed'>
                    A short diagnostic designed for senior leaders to evaluate
                    how clearly their experience communicates scope, ownership,
                    and next-role fit.
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className='px-8 md:px-14 relative z-10'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 border-y border-white/20'>
                  {[
                    { label: 'Methodology', value: 'No resume review' },
                    { label: 'Access', value: 'No feedback call' },
                    { label: 'Outcome', value: 'Just clarity' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className='flex flex-col gap-2 text-center md:text-left'
                    >
                      <span className='text-[10px] uppercase tracking-[0.2em] text-white/50 font-black'>
                        {item.label}
                      </span>
                      <span className='font-bold text-base md:text-lg'>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className='px-8 md:px-14 py-12 relative z-10'>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full'
                >
                  <Button
                    asChild
                    className='w-full bg-white text-primary hover:bg-white hover:shadow-2xl hover:shadow-white/20 rounded-2xl h-16 text-xl font-bold flex items-center justify-center gap-4 transition-all duration-300'
                  >
                    <Link
                      href='https://calendly.com/kananaloveresumes/resume-cover-letter-linkedin-revamp?preview_source=et_card&month=2024-12&date=2024-12-30'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span>Start with the self-assessment</span>
                      <ArrowRight className='size-6 translate-y-px transition-transform group-hover:translate-x-1' />
                    </Link>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
