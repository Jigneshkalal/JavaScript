import React from 'react'
import {BsFillBellFill,BsFillEnvelopeFill , BsPersonCircle , BsSearch, BsJustify} from 'react-icons/bs'

const Header = (opensidebar) => {
  return (
    <header className='header'>
    <div className="menu-icons">
        <BsJustify className='icon'></BsJustify>
    </div>
    <div className="header-left">
        <BsSearch className='icon' onClick={opensidebar}></BsSearch>
    </div>

    <div className="header-right">
        <BsFillBellFill className='icon'/>
        <BsFillEnvelopeFill className='icon'/>
        <BsPersonCircle className='icon'/>
        
    </div>
    </header>
  )
}

export default Header