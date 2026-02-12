'use client'

import { motion } from 'framer-motion'

export function FounderSection() {
  return (
    <section className='py-24 px-6 sm:px-12 md:px-24 bg-background'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start'>
        {/* Left Column: Kanana */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='flex flex-col gap-8 md:sticky md:top-24'
        >
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl font-serif text-foreground'>Kanana Love</h2>
            <p className='text-sm tracking-wide uppercase text-primary font-medium'>
              Executive Career Strategist
            </p>
          </div>

          <div className='prose prose-lg text-muted-foreground space-y-6'>
            <p>
              I work with senior leaders navigating complex transitions,
              layoffs, plateaus, and high-stakes repositioning, where clarity,
              discretion, and timing matter more than volume.
            </p>
            <p className='text-foreground font-medium italic'>
              My work is not about templates or quick wins.
            </p>
            <p>
              It’s about helping experienced leaders regain control of how their
              value is understood and how their next role is decided.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className='border-t border-border pt-6 mt-2'
          >
            <p className='text-xs text-muted-foreground uppercase tracking-widest'>
              Credentials & Recognitions
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Program Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='bg-muted/10 border border-border rounded-3xl p-8 md:p-10 flex flex-col gap-8'
        >
          <div>
            <h3 className='text-2xl font-medium mb-4'>
              What Full Job Search Support Looks Like at the Executive Level
            </h3>
            <p className='text-muted-foreground mb-6'>
              This is not a coaching package. It’s a private, one-to-one
              engagement designed to bring structure, clarity, and leverage to a
              senior-level transition or job search.
            </p>
          </div>

          <div className='space-y-6'>
            <h4 className='text-sm font-semibold uppercase tracking-wide text-primary'>
              Inside the engagement, you can expect:
            </h4>
            <ul className='space-y-4'>
              {[
                'Executive positioning and leadership narrative aligned to where you fit next',
                'Resume and LinkedIn rebuilt to reflect next-level scope and decision-maker expectations',
                'Clear role targeting and transition direction, not scattershot applications',
                'Preparation for executive-level interviews and compensation conversations',
                'Light support as you step into your next role, so momentum doesn’t drop',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className='flex items-start gap-3'
                >
                  <span className='mt-2 size-1.5 rounded-full bg-primary shrink-0' />
                  <span className='text-foreground/90'>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className='bg-background rounded-xl p-6 border border-border/50 text-sm space-y-3'
          >
            <p className='font-medium text-foreground'>
              Everything is handled directly with me.
            </p>
            <p className='text-muted-foreground'>
              Nothing is templated or delegated.
            </p>
            <p className='text-muted-foreground'>
              The focus is not doing more. It’s making every move intentional
              and giving you hands-on support so your job search doesn’t turn
              into a full-time role.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
