import React from 'react'
import PhoneSVG from 'public/phone-call-1.svg'
import SingleInfo from '../../../SingleInfo'
import MenuLinks from '../MenuLinks'
import { DrawerTypes } from '../typings/typings'

function NavDrawer({ isDrawerOpen, setIsDrawerOpen }: DrawerTypes) {
  return (
    <nav className={`fixed h-screen bg z-10 bottom-0 left-0 ${isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <section className={`fixed flex flex-col justify-between h-full w-3/4 bg-gradient-to-br from-[#FFFF00] to-[#BC8700] p-5 z-10 transition-all ${isDrawerOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
        <MenuLinks/>
        <SingleInfo alt='phone-icon' imageSrc={PhoneSVG} infoText='+996221002723' />
      </section>
      <section className={`bg-black w-screen h-screen transition-all ${isDrawerOpen ? "opacity-25" : "opacity-0"}`} onClick={() => setIsDrawerOpen(false)} />
    </nav>
  )
}

export default NavDrawer