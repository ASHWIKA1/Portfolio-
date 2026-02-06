import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import ScrollWrapper from '@/components/ScrollWrapper'
import ScrollingLogo from '@/components/ScrollingLogo'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import EducationExperience from '@/components/education-experience'
import Experience from '@/components/experience'
import CompetitiveCoding from '@/components/competitive-coding'
import Certifications from '@/components/certifications'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <Hero />
      
      {/* Scrolling logos for each section */}
      <ScrollingLogo sectionId="about" delay={0.1} />
      <ScrollingLogo sectionId="projects" delay={0.2} />
      <ScrollingLogo sectionId="skills" delay={0.3} />
      <ScrollingLogo sectionId="education" delay={0.4} />
      <ScrollingLogo sectionId="experience" delay={0.5} />
      <ScrollingLogo sectionId="competitive-coding" delay={0.6} />
      <ScrollingLogo sectionId="certifications" delay={0.7} />
      <ScrollingLogo sectionId="contact" delay={0.8} />
      
      <ScrollWrapper id="about" delay={0.1}>
        <About />
      </ScrollWrapper>
      <ScrollWrapper id="projects" delay={0.2}>
        <Projects />
      </ScrollWrapper>
      <ScrollWrapper id="skills" delay={0.3}>
        <Skills />
      </ScrollWrapper>
      <ScrollWrapper id="education" delay={0.4}>
        <EducationExperience />
      </ScrollWrapper>
      <ScrollWrapper id="experience" delay={0.5}>
        <Experience />
      </ScrollWrapper>
      <ScrollWrapper id="competitive-coding" delay={0.6}>
        <CompetitiveCoding />
      </ScrollWrapper>
      <ScrollWrapper id="certifications" delay={0.7}>
        <Certifications />
      </ScrollWrapper>
      <ScrollWrapper id="contact" delay={0.8}>
        <Contact />
      </ScrollWrapper>
      <Footer />
    </main>
  )
}
