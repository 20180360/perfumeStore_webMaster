import React, { useState } from 'react'
import { useEffect } from 'react'
import Style from './Layout.module.css'

import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'

function Layout() {
    const [counter, setCounter] = useState(0)
    useEffect(() => {}, [])
    
  return (
<>
<Navbar/>

  <Outlet></Outlet>


<Footer/>
</>
  )
}

export default Layout