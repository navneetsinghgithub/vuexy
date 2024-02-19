import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'



function Layout() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet/>
            <Footer/>
        
         
        </>
    )
}

export default Layout