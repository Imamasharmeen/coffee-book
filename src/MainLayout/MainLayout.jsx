import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    
    <div>
        {/*<Toaster />*/}
        
        <div className='h-16'>
            <Navbar></Navbar>
        </div>
        <div className='min-h-[calc(100vh-292px)] py-12 container mx-auto px-12'>
          
            <Outlet></Outlet>
        </div>
        
        <Footer></Footer>
    </div>
    
  )
}
