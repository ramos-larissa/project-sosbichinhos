import React, { useState } from 'react'
import DrawerButton from './components/DrawerButton'
import NavDrawer from './components/DrawerNav'


function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <header className='flex items-center justify-between p-5 relative'>
      <section>
        <DrawerButton isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      </section>
      <section>Logo goes here</section>
      <NavDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </header >
  )
}

export default Header