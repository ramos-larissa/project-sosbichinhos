import Image from 'next/image'
import React from 'react'
import SendIcon from '../../../../../../../public/Send-Icon.svg'

function Newsletter() {
  return (
    <section className='flex items-center justify-center'>
      <label className='flex items-center gap-4 text-base font-medium text-white' htmlFor="newsletter-email">
        Newsletter
        <div className='p-2 pl-4 rounded-[2.25rem] bg-white flex items-center '>
          <input className='text-base text-[#0A142F]' type="email" name="newsletter-email" id="newsletter-email" placeholder='Your email' />
          <button>
            <Image src={SendIcon} alt='send-icon'/>
          </button>
        </div>
      </label>
    </section>
  )
}

export default Newsletter