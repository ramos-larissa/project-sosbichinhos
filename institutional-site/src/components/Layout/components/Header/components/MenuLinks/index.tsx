import React from 'react'

function MenuLinks() {
  return (
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-14'>
      {
        [
          ['ADOTE', '/adote'],
          ['LOCALIZAÇÃO', '/localizacao'],
          ['QUEM SOMOS', '/quem-somos']
        ].map(([title, url]) => (
          <a href={url} key={url} className='text-sm font-medium'>{title}</a>
        ))
      }
    </div>
  )
}

export default MenuLinks