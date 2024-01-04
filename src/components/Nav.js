import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      {/* <h1>Hii this is Nav</h1> */}
      <nav>
        <ul className='home'>
           <li><NavLink to="/">Home</NavLink></li>
           {/* <li><NavLink to="/textform">Textform</NavLink></li> */}
           <li><NavLink to="/contact">Contact</NavLink></li>
           <li><NavLink to="/address">Address</NavLink></li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default Nav
