'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function FAQ() {
  const faqs = [
    {
      question: 'Is this resume writing or career coaching?',
      answer: (
        <div className='space-y-4'>
          <p>No.</p>
          <p>This is a senior-level transition engagement.</p>
          <p>
            The resume and LinkedIn are outputs of the work, not the work
            itself.
          </p>
          <p>
            The focus is positioning, signal, and direction so decision-makers
            quickly understand where you fit and why now.
          </p>
        </div>
      ),
    },
    {
      question: 'Who is this specifically for?',
      answer:
        'Senior managers, directors, VPs, COOs, and executives navigating a transition due to layoff, plateau, or repositioning. If you’re earlier in your career or looking for general job search help, this is not the right fit.',
    },
    {
      question: 'How long does the engagement last?',
      answer: (
        <div className='space-y-4'>
          <p>It’s structured and finite.</p>
          <p>
            The exact timeline is confirmed during the{' '}
            <Link
              href='https://calendly.com/kananaloveresumes/executive-transition-fit-conversation/2026-02-14T09:00:00-06:00'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary font-medium hover:underline'
            >
              private fit conversation
            </Link>{' '}
            based on your transition, job search context.
          </p>
          <p>This is not open-ended support.</p>
        </div>
      ),
    },
    {
      question: 'Do you apply to jobs or contact recruiters on my behalf?',
      answer:
        'No. You remain the visible leader in the process. I supports you by identifying relevant postings, tailoring your positioning to match the roles you’re pursuing, and equipping you with a clear networking approach and personal brand signal that matches your level.',
    },
    {
      question: 'Is there a guarantee?',
      answer: (
        <div className='space-y-4'>
          <p>Yes. There is a 14-day money-back guarantee.</p>
          <p>
            If within the first 14 days you feel the engagement is not the right
            fit, you can request a full refund.
          </p>
          <p className='text-sm text-muted-foreground italic'>
            Note: There are no job placement guarantees.
          </p>
        </div>
      ),
    },
    {
      question: 'What is the investment?',
      answer: (
        <div className='space-y-2'>
          <p>The engagement is $2,000.</p>
          <p>
            Payment options are discussed during the{' '}
            <Link
              href='https://calendly.com/kananaloveresumes/executive-transition-fit-conversation/2026-02-14T09:00:00-06:00'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary font-medium hover:underline'
            >
              fit conversation
            </Link>
            .
          </p>
        </div>
      ),
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className='py-24 px-6 sm:px-12 md:px-24 bg-primary/5'>
      <div className='max-w-3xl mx-auto flex flex-col gap-12'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-3xl font-medium text-center'
        >
          Frequently Asked Questions
        </motion.h2>

        <div className='flex flex-col border-t border-border'>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='border-b border-border'
              >
                <Button
                  variant='ghost'
                  asChild
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className='w-full h-auto text-left py-6 px-0 flex items-center justify-between group hover:bg-transparent'
                >
                  <button>
                    <span
                      className={cn(
                        'text-lg font-medium transition-colors',
                        isOpen
                          ? 'text-primary'
                          : 'text-foreground group-hover:text-primary',
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        'shrink-0 transition-transform duration-300',
                        isOpen ? 'rotate-180' : '',
                      )}
                    >
                      <ChevronDown className='size-5 text-muted-foreground' />
                    </span>
                  </button>
                </Button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className='pb-6 text-muted-foreground leading-relaxed text-base overflow-hidden'>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
