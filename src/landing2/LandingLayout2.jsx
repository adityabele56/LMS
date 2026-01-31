import React from 'react'
import Navbar2 from './Navbar2'
import { Outlet } from 'react-router-dom'
import Footer2 from './Footer2'

function LandingLayout2() {
  return (
    <div>
      <Navbar2/>
      <main>
        <Outlet/>
      </main>
      <Footer2/>
    </div>
  )
}

export default LandingLayout2
