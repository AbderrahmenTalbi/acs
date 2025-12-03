import { Hero } from "@/components/hero"
import { WhoWeAre } from "@/components/who-we-are"
import { HowWeGrow } from "@/components/what-we-do"
import { PastEvents } from "@/components/past-events"
import { JoinUs } from "@/components/join-us"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { OurStructure } from "@/components/OurStructure"
import { MajorEvents } from "@/components/MajorEvents"
import { AchievementGallery } from "@/components/MemberTriumphs"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <OurStructure />
      <AchievementGallery />
      <HowWeGrow />
      <PastEvents />
      <JoinUs />
      <Contact />
    </main>
  )
}
