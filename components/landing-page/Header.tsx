'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 border-b',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-border py-2'
          : 'bg-transparent border-transparent py-4',
      )}
    >
      <div className='max-w-7xl mx-auto px-6 sm:px-12 md:px-24 flex items-center justify-between'>
        <div className='text-xl font-medium tracking-tight text-foreground'>
          Kanana <span className='text-primary'>Love</span>
        </div>

        <nav className='hidden md:flex items-center gap-8'>
          <Button asChild className='px-5 py-2.5 h-11 rounded-full'>
            <Link
              href='https://calendly.com/kananaloveresumes/resume-cover-letter-linkedin-revamp?preview_source=et_card&month=2024-12&date=2024-12-30'
              target='_blank'
              rel='noopener noreferrer'
            >
              Private fit conversation
            </Link>
          </Button>
        </nav>

        {/* Mobile Button Only */}
        <Button asChild size='sm' className='md:hidden h-11 rounded-full'>
          <Link
            href='https://calendly.com/kananaloveresumes/resume-cover-letter-linkedin-revamp?preview_source=et_card&month=2024-12&date=2024-12-30'
            target='_blank'
            rel='noopener noreferrer'
          >
            Start Here
          </Link>
        </Button>
      </div>
    </header>
  )
}
