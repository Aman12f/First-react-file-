import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import About1 from './About1'


export default function Navbar(props) {
   const navigate = useNavigate();
   const goHome =()=>{
    navigate("/");
   }
  return (
    <>
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.about_us}</a>
         </li>
          <li className="nav-item m-2">
           <NavLink to="/textform" style={{color:props.mode==='light'?'black':'white'}}>TextForm</NavLink>
         </li>
         <li className='nav-item m-2'>
          <NavLink to="/about" style={{color:props.mode==='light'?'black':'white'}}>About1</NavLink>
         </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

      </div>
     
      {/* <div className={`form-check form-switch`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.funcBlue}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Blue Mode</label>
</div>
      <div className={`form-check form-switch`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.funcGreen}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
</div>
      <div className={`form-check form-switch`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.funcRed}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
</div> */}

<div className="d-flex mt-1">
    <div className="bg-primary rounded mx-2" style={{height:'25px',width:'25px',cursor:'pointer',border:'1px solid black',zIndex:'10'}} onClick={()=>props.toggleMode2('primary')}></div>
    <div className="bg-danger rounded mx-2" style={{height:'25px',width:'25px',cursor:'pointer',border:'1px solid black',zIndex:'10'}} onClick={()=>props.toggleMode2('danger')}></div>
    <div className="bg-success rounded mx-2" style={{height:'25px',width:'25px',cursor:'pointer',border:'1px solid black',zIndex:'10'}} onClick={()=>props.toggleMode2('success')}></div>
    <div className="bg-warning rounded mx-2" style={{height:'25px',width:'25px',cursor:'pointer',border:'1px solid black',zIndex:'10'}} onClick={()=>props.toggleMode2('warning')}></div>
    {/* <div className="rounded mx-2" style={{height:'25px',width:'25px',cursor:'pointer',backgroundColor:'#0d143a'}} onClick={()=>props.toggleMode2('#0d143a')}></div> */}
  <div className="button rounded mx-2">
    <button className ="btn-go" id = "btn" onClick={goHome}>Home</button>
  </div>
  </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
  <label className="form-check-label" htmlforor="flexSwitchCheckDefault">Toggle Mode</label>
</div>
    </div>


  </nav>
 
  <Outlet></Outlet>
</>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
                    aboutText : PropTypes.string
                   }

Navbar.defaultProps = {
    title: 'Set title here',
    home: 'Sweet Home',
    about_us: 'About text here'
}                   

