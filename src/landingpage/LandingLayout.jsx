import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import PopularCourse from './PopularCourse'
import Teachers from './Teachers'
import Trust from './Trust'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function LandingLayout() {
  return (
    /* 1. 'overflow-y-auto-auto' ko 'overflow-y-auto' kiya */
    /* 2. 'min-h-screen' add kiya taaki scroll chalu ho jaye */
    <div className='flex-1 min-h-screen overflow-y-auto overflow-x-hidden'>
      <Hero/>
      <PopularCourse/>
      <Teachers/>
      <Trust/>
    
    
    </div>
  )
}

export default LandingLayout