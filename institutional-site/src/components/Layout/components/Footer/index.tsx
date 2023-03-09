import React from 'react'
import FooterInfo from './components/FooterInfo'
import Newsletter from './components/Newsletter'

function Footer() {
  return (
    <footer className='w-full h-52 bg-[#009BD7] px-5 py-7 flex flex-col justify-between'>
      <Newsletter />
      <FooterInfo />
    </footer>
  )
}

export default Footer