import Image from 'next/image'
import React from 'react'
import LocationIcon from '../../../../../../../public/location.svg'
import PhoneIcon from '../../../../../../../public/round-phone.svg'
import InstagramIcon from '../../../../../../../public/Instagram.svg'
import FacebookIcon from '../../../../../../../public/Facebook.svg'
import SingleInfo from '../../../SingleInfo'

function FooterInfo() {
  return (
    <section className='text-white flex flex-col gap-4 px-[.475rem]'>
      <SingleInfo alt='location-icon' imageSrc={LocationIcon} infoText='345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345' />
      <div className='flex justify-between px-6'>
        <SingleInfo alt='phone-icon' imageSrc={PhoneIcon} infoText='(123) 456-7890' />
        <div className='flex gap-2 items-center'>
          <div>
            <p className='text-sm'>
              Social Media
            </p>
          </div>
          <div className='flex gap-1'>
            <Image src={InstagramIcon} alt='insta-icon' />
            <Image src={FacebookIcon} alt='face-icon' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterInfo