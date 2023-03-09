import React from 'react'
import FooterInfo from './components/FooterInfo'
import Newsletter from './components/Newsletter'

function Footer() {
  return (
    <footer className='w-full h-60 lg:h-52 flex flex-col justify-between'>
      <section className='bg-[#009BD7] px-5 lg:px-16 pt-7 lg:pt-14 pb-3 flex flex-col justify-between h-full lg:items-center'>
        <div className='w-full lg:max-w-[83.375rem] lg:mx-auto flex flex-col lg:flex-row justify-between'>
          <Newsletter />
          <FooterInfo />
        </div>
        <div>
          <p className='text-white text-center text-xs'>
            © Copyright 2023
          </p>
        </div>
      </section>
    </footer>
  )
}

export default Footer