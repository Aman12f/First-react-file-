import React, { useState } from 'react'

export default function DarkPrtc() {
    // const [mystyle,setMyStyle] = useState({
    //     border:'2px solid black',
    //     padding:'40px',
    //     backgroundColor:'white',
    //     color:'black'       
    // })
    const [darkStyle,setDarkStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const [btnName,setBtnName] = useState('Set Light Mode');
    
    const Submit=()=>{
        if(darkStyle.color === 'white'){
            setDarkStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnName('Set Dark Mode');
        }
        else{
            setDarkStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnName('Set Light Mode');
        }

    }
  return (
    <>
    <div className="form">

    <form style={darkStyle}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="button" className="btn btn-primary" onClick={Submit}>{btnName}</button>
</form>
    </div>

    </>
   
  )
}
