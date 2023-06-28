import IntroText from '@/components/Intro/intro.text'
import Navbar from '@/components/Nav/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen container mx-auto">
      <Navbar/>
      <IntroText/>
    </main>
  )
}
