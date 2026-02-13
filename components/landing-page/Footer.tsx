import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='py-20 px-6 sm:px-12 md:px-24 bg-background border-t border-border'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-start'>
        <div className='flex flex-col gap-6 max-w-sm'>
          <div className='text-xl font-medium tracking-tight text-foreground'>
            Kanana <span className='text-primary'>Love</span>
          </div>
          <p className='text-sm text-muted-foreground leading-relaxed'>
            Helping senior leaders regain control of how their value is
            understood and how their next role is decided.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-12 sm:gap-24'>
          <div className='flex flex-col gap-4'>
            <h4 className='text-sm font-semibold uppercase tracking-wider text-foreground'>
              Engagement
            </h4>
            <ul className='flex flex-col gap-3 text-sm text-muted-foreground'>
              <li>
                <Link
                  href='#offer'
                  className='hover:text-primary transition-colors'
                >
                  Job Search Support
                </Link>
              </li>
              <li>
                <Link
                  href='#assessment'
                  className='hover:text-primary transition-colors'
                >
                  Self-Assessment
                </Link>
              </li>
              <li>
                <Link
                  href='#success'
                  className='hover:text-primary transition-colors'
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='text-sm font-semibold uppercase tracking-wider text-foreground'>
              Company
            </h4>
            <ul className='flex flex-col gap-3 text-sm text-muted-foreground'>
              <li>
                <Link
                  href='#about'
                  className='hover:text-primary transition-colors'
                >
                  About Kanana
                </Link>
              </li>
              <li>
                <Link
                  href='https://calendly.com/kananaloveresumes/resume-cover-letter-linkedin-revamp?preview_source=et_card&month=2024-12&date=2024-12-30'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4'>
        <p className='text-xs text-muted-foreground'>
          © {currentYear} Kanana Love. All rights reserved.
        </p>
        <p className='text-xs text-muted-foreground'>
          Made with care for mission-driven leaders.
        </p>
      </div>
    </footer>
  )
}
