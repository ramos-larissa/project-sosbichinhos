import Image from 'next/image'
import React, { useState } from 'react'
import DrawerButton from './components/DrawerButton'
import NavDrawer from './components/DrawerNav'
import Logo from 'public/logo.svg'
import MenuLinks from './components/MenuLinks'
import SingleInfo from '../SingleInfo'
import PhoneSVG from 'public/phone-call-1.svg'

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <header className='w-full flex items-center justify-between p-5 lg:py-16 lg:px-0 lg:max-w-[83.375rem] lg:mx-auto relative'>
      <section className='lg:hidden'>
        <DrawerButton isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      </section>
      <section className='mx-auto lg:mx-0 flex gap-2 items-center'>
        <div className='w-11 lg:w-16 h-11 lg:h-16 relative'>
          <Image src={Logo} alt='sos-logo' fill />
        </div>
        <div>
          <h3 className='font-black text-xl'>SOSBICHINHOS</h3>
        </div>
      </section>
      <section className='hidden lg:block'>
        <MenuLinks />
      </section>
      <section className='hidden lg:block'>
        <SingleInfo alt='phone-icon' imageSrc={PhoneSVG} infoText='+996221002723' />
      </section>
      <NavDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </header >
  )
}

export default Header