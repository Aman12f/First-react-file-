import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
      <h1>Hiii This is Home</h1>
    </div>
    <nav>
        <ul>
            
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
    <Outlet></Outlet>
    </>
  )
}

export default Home
