import { FAQ } from '@/components/landing-page/FAQ'
import { FounderSection } from '@/components/landing-page/FounderSection'
import { HeroSection } from '@/components/landing-page/HeroSection'
import { LeadMagnet } from '@/components/landing-page/LeadMagnet'
import { OfferSection } from '@/components/landing-page/OfferSection'
import { SuccessStories } from '@/components/landing-page/SuccessStories'
import { TrustedBy } from '@/components/landing-page/TrustedBy'

export default function Home() {
  return (
    <main className='min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary'>
      <HeroSection />
      <SuccessStories />
      <OfferSection />
      <FounderSection />
      <TrustedBy />
      <LeadMagnet />
      <FAQ />
    </main>
  )
}
