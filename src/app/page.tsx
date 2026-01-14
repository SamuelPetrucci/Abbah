import Hero from '@/components/sections/Hero'
import FoundationalPillars from '@/components/sections/FoundationalPillars'
import Mission from '@/components/sections/Mission'
import SupportSection from '@/components/sections/SupportSection'
import Resources from '@/components/sections/Resources'
import Events from '@/components/sections/Events'
import DonationCTA from '@/components/DonationCTA'
import Partners from '@/components/sections/Partners'
import Volunteer from '@/components/sections/Volunteer'
import MeetTheTeam from '@/components/sections/MeetTheTeam'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FoundationalPillars />
      <Mission />
      <SupportSection />
      <Resources />
      <Events />
      <DonationCTA />
      <Partners />
      <MeetTheTeam />
      <Volunteer />
    </div>
  )
}
