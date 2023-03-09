import React, { ReactNode } from 'react'
import Header from './components/Header'

type Layout = {
  children: ReactNode
}

function Layout({ children }: Layout) {
  return (
    <div className='bg-gradient-to-br from-[#FFFF00] to-[#BC8700]'>
      <Header />
      <main>
        {children}
      </main>
      <footer>footer goes here</footer>
    </div>
  )
}

export default Layout