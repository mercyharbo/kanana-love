'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export function OfferSection() {
  return (
    <section
      id='offer'
      className='py-24 px-6 sm:px-12 md:px-24 bg-primary text-primary-foreground'
    >
      <div className='max-w-4xl mx-auto flex flex-col gap-16'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-center flex flex-col gap-6'
        >
          <h2 className='text-sm font-semibold tracking-widest text-primary-foreground/70 uppercase'>
            How Senior Transitions Actually Work
          </h2>
          <h3 className='text-3xl md:text-4xl font-medium text-balance'>
            At the executive level, job searches don’t stall because of missing
            skills or lack of experience.
          </h3>
          <p className='text-xl text-primary-foreground/80 text-balance'>
            They stall because the market can’t quickly interpret where you fit
            next.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className='bg-background text-foreground rounded-3xl p-8 md:p-12 shadow-2xl ring-1 ring-white/10 border-none'>
            <div className='flex flex-col md:flex-row gap-12 items-start justify-between'>
              <div className='flex flex-col gap-6 max-w-lg'>
                <div>
                  <h4 className='text-2xl font-semibold mb-2'>
                    Full Job Search Support
                  </h4>
                  <p className='text-muted-foreground'>
                    For senior leaders in transition who want their next move
                    handled with structure and discretion.
                  </p>
                </div>

                <div className='space-y-4'>
                  <p className='text-foreground/90 font-medium'>
                    This is a private, one-to-one engagement focused on:
                  </p>
                  <ul className='space-y-3'>
                    {[
                      'Restoring signal',
                      'Clarifying direction',
                      'Moving through transition, layoff deliberately',
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className='flex items-center gap-3'
                      >
                        <CheckCircle2 className='size-5 text-primary shrink-0' />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <p className='text-sm text-muted-foreground italic'>
                  ...without turning the job search into a second full-time
                  role.
                </p>
              </div>

              <div className='flex flex-col gap-6 w-full md:w-auto bg-primary/5 p-6 rounded-2xl border border-primary/10'>
                <div className='text-center'>
                  <p className='text-sm text-muted-foreground uppercase tracking-wide mb-1'>
                    Investment
                  </p>
                  <p className='text-4xl font-bold text-primary'>$2,000</p>
                </div>
                <Button
                  asChild
                  className='w-full rounded-xl font-medium transition-all hover:scale-105 active:scale-95 h-auto py-4 px-6 text-balance'
                >
                  <Link
                    href='https://calendly.com/kananaloveresumes/executive-transition-fit-conversation/2026-02-14T09:00:00-06:00'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Start with a private fit conversation
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
