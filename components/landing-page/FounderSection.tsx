'use client'

import { GlowImage } from '@/components/ui/glow-image'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { motion } from 'framer-motion'
import NextImage from 'next/image'

export function FounderSection() {
  const engagementPoints = [
    'Executive positioning and leadership narrative aligned to where you fit next',
    'Resume and LinkedIn rebuilt to reflect next-level scope and decision-maker expectations',
    'Clear role targeting and transition direction, not scattershot applications',
    'Preparation for executive-level interviews and compensation conversations',
    'Light support as you step into your next role, so momentum doesn’t drop',
  ]

  return (
    <section
      id='about'
      className='py-24 px-6 sm:px-12 md:px-24 bg-background overflow-hidden'
    >
      <ScrollReveal
        variant='fade'
        duration={1}
        className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start'
      >
        {/* Left Column: Founder ID Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='lg:col-span-1 xl:col-span-1 lg:sticky lg:top-32'
        >
          <div className='relative bg-linear-to-br from-primary via-primary/90 to-[#2563eb] rounded-5xl p-8 md:p-10 text-primary-foreground shadow-2xl overflow-hidden group'>
            {/* Background Accents */}
            <div className='absolute -top-24 -right-24 size-64 bg-white/10 rounded-full blur-3xl' />
            <div className='absolute -bottom-12 -left-12 size-48 bg-black/10 rounded-full blur-3xl' />

            <div className='relative z-10 flex flex-col items-center text-center gap-6'>
              {/* Profile Picture (Moved to Top) */}
              <div className='relative'>
                <GlowImage
                  glowColor='white'
                  className='size-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105'
                >
                  <div className='relative w-full h-full bg-white/10 transition-all duration-700'>
                    <NextImage
                      src='/founder.jpeg'
                      alt='Kanana Love'
                      fill
                      className='object-cover object-top'
                    />
                  </div>
                </GlowImage>
              </div>

              <div className='space-y-1'>
                <h2 className='text-3xl font-serif font-bold tracking-tight'>
                  Kanana Love
                </h2>
                <p className='text-tiny tracking-widest uppercase font-semibold text-white/70'>
                  Executive Career Strategist
                </p>
              </div>

              <div className='prose prose-sm prose-invert text-white/90 leading-relaxed text-pretty text-center flex flex-col gap-4'>
                <p>
                  I work with senior leaders navigating complex transitions,
                  layoffs, plateaus, and high-stakes repositioning, where
                  clarity, discretion, and timing matter more than volume.
                </p>
                <p className='font-semibold italic text-[15px] text-white'>
                  &ldquo;My work is not about templates or quick wins.&rdquo;
                </p>
                <p>
                  It&rsquo;s about helping experienced leaders regain control of
                  how their value is understood and how their next role is
                  decided.
                </p>
              </div>

              {/* Credentials Styled as Tags */}
              <div className='w-full pt-6 border-t border-white/10 mt-2'>
                <p className='text-sm uppercase tracking-widest text-white/50 mb-4 font-bold'>
                  Credentials & Recognitions
                </p>
                <div className='flex flex-wrap justify-center gap-2'>
                  {[
                    'Private Consulting',
                    'Leadership Strategy',
                    'Executive Narratives',
                  ].map((item) => (
                    <span
                      key={item}
                      className='px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-medium backdrop-blur-sm'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Program Details */}
        <div className='lg:col-span-2 xl:col-span-2 flex flex-col gap-5'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            <h3 className='text-3xl md:text-4xl font-sans font-medium text-foreground text-balance leading-tight'>
              What Full Job Search Support Looks Like at the <br />
              <span className='text-primary'>Executive Level</span>
            </h3>
            <p className='text-lg text-muted-foreground max-w-2xl text-pretty'>
              This is not a coaching package. It&rsquo;s a private, one-to-one
              engagement designed to bring structure, clarity, and leverage to a
              senior-level transition or job search.
            </p>
          </motion.div>

          {/* Points Converted to Card Grid */}
          <div className='space-y-6'>
            <h4 className='text-sm font-bold uppercase tracking-[0.2em] text-primary/80'>
              Inside the engagement, you can expect:
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {engagementPoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.02 }}
                  className='p-6 bg-card border border-border rounded-2xl shadow-xs transition-all duration-300 flex items-start gap-4'
                >
                  <div className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                  <span className='text-[15px] text-foreground/90 font-medium leading-relaxed'>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Summary Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className='p-8 bg-secondary/30 rounded-3xl border border-border relative overflow-hidden'
          >
            <div className='relative z-10 space-y-4'>
              <p className='font-bold text-foreground text-xl'>
                Everything is handled directly with me.
              </p>
              <div className='flex flex-col gap-2 text-muted-foreground'>
                <p className='font-medium text-foreground/80'>
                  Nothing is templated or delegated.
                </p>
                <p className='text-pretty leading-relaxed'>
                  The focus is not doing more. It&rsquo;s making every move
                  intentional and giving you hands-on support so your job search
                  doesn&rsquo;t turn into a full-time role.
                </p>
              </div>
            </div>
            {/* Subtle Texture/Decoration */}
            <div className='absolute bottom-0 right-0 p-6 opacity-5 pointer-events-none'>
              <div className='size-32 rounded-full border-8 border-primary' />
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  )
}
