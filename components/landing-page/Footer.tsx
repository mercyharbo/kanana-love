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
                <a href='#' className='hover:text-primary transition-colors'>
                  Job Search Support
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Self-Assessment
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='text-sm font-semibold uppercase tracking-wider text-foreground'>
              Company
            </h4>
            <ul className='flex flex-col gap-3 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  About Kanana
                </a>
              </li>
              <li>
                <a
                  href='mailto:hello@kananalove.com'
                  className='hover:text-primary transition-colors'
                >
                  Contact
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Privacy Policy
                </a>
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
