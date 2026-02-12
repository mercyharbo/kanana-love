import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
      <div className='max-w-7xl mx-auto px-6 sm:px-12 md:px-24 h-20 flex items-center justify-between'>
        <div className='text-xl font-medium tracking-tight text-foreground'>
          Kanana <span className='text-primary'>Love</span>
        </div>

        <nav className='hidden md:flex items-center gap-8'>
          <Button className='px-5 py-2.5'>Private fit conversation</Button>
        </nav>

        {/* Mobile Button Only */}
        <Button size='sm' className='md:hidden'>
          Start Here
        </Button>
      </div>
    </header>
  )
}
