import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Nav from './Nav'

const Address = () => {
    const navigate = useNavigate();
    const goTocontact=()=>{
        navigate("/contact");
    }
  return (
   
    <>
        {/* <Nav></Nav> */}
        <section>
        <h3>Hii this is Address</h3>
        <button onClick={goTocontact}>Go to contact Page</button>

        </section>
    </>
  )
}

export default Address
