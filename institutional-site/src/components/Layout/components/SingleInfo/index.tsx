import Image from 'next/image'
import React from 'react'

type SingleInfo = {
  imageSrc: string
  infoText: string
  alt: string
}

function SingleInfo({ alt, imageSrc, infoText }: SingleInfo) {
  return (
    <div className='flex gap-1 items-center'>
      <div>
        <Image src={imageSrc} alt={alt} />
      </div>
      <div>
        <p className='text-sm'>{infoText}</p>
      </div>
    </div>
  )
}

export default SingleInfo