import Image from 'next/image'
import bg1 from 'public/images/bg1.png';
import { Hero } from '@/components';
import { Vision } from '@/components';
import { Card } from '@/components';
import { Footer } from '@/components';

export default function Home() {
  return (
    <div className='bg-no-repeat'
      style={{
        backgroundImage: `url(${bg1.src})`,
      }}
    >
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero/>
      <Vision/>
      <div className='pb-[150px]'>
      <Card/>
      </div>
      <Footer/>

    </main>
    </div>

  )
}
