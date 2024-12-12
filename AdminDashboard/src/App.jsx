import './App.css'
import React, { useState } from 'react'
import Header from './Header'
import Home from './Home'
import SideBar from './SideBar'

const App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <SideBar openSidebarToggle={openSidebarToggle}/>
      <Home/>
    </div>
  )
}
  


export default App
 