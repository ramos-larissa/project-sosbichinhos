import React from 'react'
import { DrawerTypes } from '../typings/typings'

function DrawerButton({ setIsDrawerOpen, isDrawerOpen }: DrawerTypes) {
  return (
    <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="h-10 w-10 border-[.0625rem] border-black rounded flex flex-col justify-center items-center group relative">
      <span aria-hidden="true" className={`h-[.125rem] w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${isDrawerOpen ? "rotate-45 translate-y-[0.7rem]" : "rotate-0 translate-y-0"}`}></span>
      <span aria-hidden="true" className={`h-[.125rem] w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${isDrawerOpen ? "opacity-0" : "opacity-100"}`}></span>
      <span aria-hidden="true" className={`h-[.125rem] w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${isDrawerOpen ? "-rotate-45 -translate-y-[0.6rem]" : "rotate-0 translate-y-0"}`}></span>
    </button>
  )
}

export default DrawerButton