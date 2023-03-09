import Image from 'next/image'
import React from 'react'
import PhoneSVG from '../../../../../../../public/phone-call-1.svg'
import { DrawerTypes } from '../typings/typings'

function NavDrawer({ isDrawerOpen, setIsDrawerOpen }: DrawerTypes) {
  return (
    <nav className={`fixed h-screen bg z-10 bottom-0 left-0 ${isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <section className={`fixed flex flex-col justify-between h-full w-3/4 bg-gradient-to-br from-[#FFFF00] to-[#BC8700] p-5 z-10 transition-all ${isDrawerOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
        <div className='flex flex-col gap-6'>
          {
            [
              ['ADOTE', '/adote'],
              ['LOCALIZAÇÃO', '/localizacao'],
              ['QUEM SOMOS', '/quem-somos']
            ].map(([title, url]) => (
              <a href={url} key={url} className='text-sm font-medium'>{title}</a>
            ))
          }
        </div>
        <div className='flex gap-6'>
          <div>
            <Image src={PhoneSVG} alt="" />
          </div>
          <div>
            <p className='text-sm font-medium'>+996221002723</p>
          </div>
        </div>
      </section>
      <section className={`bg-black w-screen h-screen transition-all ${isDrawerOpen ? "opacity-25" : "opacity-0"}`} onClick={() => setIsDrawerOpen(false)} />
    </nav>
  )
}

export default NavDrawer