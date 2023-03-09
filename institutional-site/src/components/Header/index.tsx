import React, { useState } from 'react'
import DrawerButton from './components/DrawerButton'
import PhoneSVG from '../../../public/phone-call-1.svg'
import Image from 'next/image'


function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <header className='flex items-center justify-between p-5 relative'>
      <section>
        <DrawerButton isDrawerOpen setIsDrawerOpen={setIsDrawerOpen} />
      </section>
      <section>Logo goes here</section>
      <nav className='fixed h-screen bg z-10 bottom-0 left-0 w-3/4 bg-[#ECAC2E] p-5 flex flex-col justify-between'>
        <section className='flex flex-col gap-6'>
          {
            [
              ['ADOTE', '/adote'],
              ['LOCALIZAÇÃO', '/localizacao'],
              ['QUEM SOMOS', '/quem-somos']
            ].map(([title, url]) => (
              <a href={url} key={url} className='text-sm font-medium'>{title}</a>
            ))
          }
        </section>
        <section className='flex gap-6'>
          <div>
            <Image src={PhoneSVG} alt="" />
          </div>
          <div>
            <p className='text-sm font-medium'>+996221002723</p>
          </div>
        </section>
      </nav>
    </header >
  )
}

export default Header