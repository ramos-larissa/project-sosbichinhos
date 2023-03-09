import React from 'react'

type DrawerButton = {
    isDrawerOpen: boolean
    setIsDrawerOpen: (isDrawerOpen: boolean) => void
}

function DrawerButton({ setIsDrawerOpen, isDrawerOpen }: DrawerButton) {
    return (
        <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="h-12 w-12 border-2 border-black rounded flex flex-col justify-center items-center group relative">
            <span aria-hidden="true" className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${isDrawerOpen ? "rotate-45 translate-y-3" : "rotate-0 translate-y-0"}`}></span>
            <span aria-hidden="true" className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${isDrawerOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span aria-hidden="true" className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${isDrawerOpen ? "-rotate-45 -translate-y-3" : "rotate-0 translate-y-0"}`}></span>
        </button>
    )
}

export default DrawerButton