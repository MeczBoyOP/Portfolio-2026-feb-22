import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import CustomCursor from './components/CustomCursor'
import ParticleCanvas from './components/ParticleCanvas'
import VideoBackground from './components/VideoBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <ThemeProvider>
      {/* Background layers */}
      <VideoBackground />
      <ParticleCanvas />

      {/* Custom cursor (hidden on mobile) */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 5 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </ThemeProvider>
  )
}
