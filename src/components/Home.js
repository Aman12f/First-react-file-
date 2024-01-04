import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Nav></Nav>
        <section>
        <h3>Hii this is Home</h3>
        </section>
        
        <Outlet></Outlet>
    </>
    
  )
}

export default Home
