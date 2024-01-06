import React, {useState} from 'react'
import Navbar from './Navbar';
// import App from '../App';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

export default function TextForm(props) {
  

  const goback = useNavigate();
  const goBack=()=>{
    goback("/");
  }

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let set_text = text.toUpperCase();
        setText(set_text);
        props.showAlert("Converted to Uppercase","success");
        // setText("You have clicked on handleUpClick")
    }
    const handleLowClick = () =>{
        // console.log("Uppercase was clicked");
        let set_text = text.toLocaleLowerCase();
        setText(set_text);
        props.showAlert("Converted to LowerCase","success");
        // setText("You have clicked on handleUpClick")
    }
    const handleOnchange = (event) =>{
        // console.log("On change")
        setText(event.target.value);
    }
    const cleartext = ()=>{
        setText('');
    }
    const [text, setText] = useState('');
    // setText("fuck you");
  return (
  <>
  {/* <Navbar title="TextUtils" about_us = "About_US" mode ={mode} toggleMode = {toggleMode}/> */}
  {/* <Nav></Nav> */}
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h3 className="mb-3">{props.heading}</h3>
  <div className="mb-3">
    <textarea onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#0d143a':'white',color:props.mode==='dark'?'white':'black'}} className="form-control" id="exampleFormControlTextarea1" rows="8" value={text}></textarea>
  </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={cleartext}>Clear Text</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Noting to preview."}</p>
</div>

{/* <div className="button">
  <button className ="btn-go" onClick={goBack}> Go Back</button>
</div> */}
  </>

  )
}
