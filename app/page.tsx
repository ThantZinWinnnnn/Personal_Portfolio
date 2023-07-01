import IntroText from '@/components/Intro/intro.text'
import Navbar from '@/components/Nav/Navbar'
import ProjectsPage from '@/components/projects/project.page'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen container mx-auto">
      <Navbar/>
      <IntroText/>
      <ProjectsPage/>
    </main>
  )
}
