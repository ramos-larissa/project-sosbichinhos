import React, { ReactNode } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

type Layout = {
  children: ReactNode
}

function Layout({ children }: Layout) {
  return (
    <div className='bg-gradient-to-br from-[#FFFF00] to-[#BC8700]'>
      <Header />
      <main className='h-screen'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout