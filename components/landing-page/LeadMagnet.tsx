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

export function LeadMagnet() {
  return (
    <section className='py-20 px-6 sm:px-12 md:px-24 bg-background flex justify-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='max-w-2xl w-full bg-secondary/20 border border-border rounded-2xl p-8 md:p-10 flex flex-col items-center text-center gap-6 relative overflow-hidden'
      >
        {/* Subtle decorative element */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />

        <div className='space-y-2 z-10'>
          <h3 className='text-lg font-medium text-foreground'>
            Not ready to decide yet?
          </h3>
          <p className='text-muted-foreground text-balance'>
            If you want to pressure-test how your experience is being
            interpreted before committing, start here instead.
          </p>
        </div>

        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className='w-full'
        >
          <Card className='w-full border-border/50 shadow-sm z-10 overflow-hidden'>
            <CardHeader className='pb-4'>
              <CardTitle className='text-2xl font-semibold text-primary'>
                Executive Signal Self-Assessment
              </CardTitle>
              <CardDescription className='text-base text-muted-foreground text-pretty'>
                A short diagnostic designed for senior leaders to evaluate how
                clearly their experience communicates scope, ownership, and
                next-role fit.
              </CardDescription>
            </CardHeader>

            <CardContent className='flex flex-col gap-6'>
              <div className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground/80'>
                <span>No resume review.</span>
                <span>No feedback call.</span>
                <span>Just clarity.</span>
              </div>
            </CardContent>

            <CardFooter className='justify-center pt-2'>
              <Button
                variant='link'
                className='inline-flex items-center justify-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group'
              >
                Start with the self-assessment
                <ArrowRight className='size-4 group-hover:translate-x-1 transition-transform' />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
