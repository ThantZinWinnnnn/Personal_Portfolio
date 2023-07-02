import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import IntroText from '@/components/Intro/intro.text'
import Navbar from '@/components/Nav/Navbar'
import ProfileDetail from '@/components/Profile/profile.detail'
import ShowSkill from '@/components/Skills/skill.page'
import ProjectsPage from '@/components/projects/project.page'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen container mx-auto">
      
      <IntroText/>
      <ProjectsPage/>
      <ProfileDetail/>
      <ShowSkill/>
      <Contact/>
    </main>
  )
}
