import React, { ReactNode } from 'react'
import Header from '../Header'

type Layout = {
    children: ReactNode
}

function Layout({ children }: Layout) {
    return (
        <>
            <Header />
            <body>
                {children}
            </body>
            <footer>footer goes here</footer>
        </>
    )
}

export default Layout