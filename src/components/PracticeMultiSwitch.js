import React from 'react'

export default function PracticeMultiSwitch(props) {
  return (
   <>
   <div className="container">

   <nav className="navbar navbar-expand-lg" style={{backgroundColor:props.dark, color:props.textcolor}}>
   {/* <nav className={`navbar navbar-expand-lg navbar-${props.dark === 'dark' ? 'dark' : props.dark === 'red' ? 'red' : props.dark === 'green' ? 'green' : 'light'} bg-${props.dark === 'dark' ? 'dark' : props.dark === 'red' ? 'red' : props.dark === 'green' ? 'green' : 'light'}`}> */}

  <div className="container-fluid">
    <a className={`navbar-brand text-${props.textcolor}`} href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className={`nav-link active text-${props.textcolor}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.textcolor}`} href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.textcolor}`} href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link disabled text-${props.textcolor}`} href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
<div className="swithes">

  <div className="form-check form-switch mx-2">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault1" onClick={props.funcDark}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark </label>
  </div>

  <div className="form-check form-switch mx-2">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault2" onClick={props.funcRed}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red </label>
  </div>

  <div className="form-check form-switch mx-2">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault3" onClick={props.funcGreen}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green</label>
  </div>

</div>
</nav>
   </div>

   </>
  )
}
