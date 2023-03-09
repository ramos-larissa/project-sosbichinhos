import Image from 'next/image'
import React, { useState } from 'react'
import DrawerButton from './components/DrawerButton'
import NavDrawer from './components/DrawerNav'
import Logo from '../../../../../public/logo.svg'

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <header className='flex items-center justify-between p-5 relative'>
      <section>
        <DrawerButton isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      </section>
      <section className='mx-auto flex gap-5 items-center'>
        <div className='w-12 h-11 relative'>
          <Image src={Logo} alt='sos-logo' width={48} height={44}/>
        </div>
        <div>
          <h3 className='font-black text-xl'>SOSBICHINHOS</h3>
        </div>
      </section>
      <NavDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </header >
  )
}

export default Header