import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'



function Layout() {
    return (
        <>
            <div className='d-flex flex-column w-100' style={{ minHeight: '100vh', }}>
                <Navbar />
                <Sidebar />
                <div className='maim-content'>
                    <Outlet />
                </div>
               
            </div>
            <Footer />


        </>
    )
}

export default Layout