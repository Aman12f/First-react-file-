import React from 'react';
import './App.css';
import Navbar3 from './components/Navbar3';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from './components/Nav';
// import Address from './components/Address';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Error from './components/Error';




// function App() {  
    //  ---------------------THapa Router----------
//     return (
//         <>
//       <BrowserRouter>
//         <Routes>
//           {/* <Route path="/" element={<Nav></Nav>}> </Route> */}
//           <Route path="/" element={<Home></Home>}> 
//              <Route path="/contact" element={<Contact></Contact>}></Route>
//              <Route path="/address" element={<Address></Address>}></Route>
//           </Route>
//           <Route path="*" element={<Error></Error>}></Route>

          
//         </Routes>
//       </BrowserRouter>
       
     
     
//       </>
//       );
//     }

// import { BrowserRouter, Route,Routes} from 'react-router-dom';
// import Home from './components/Home';
// import Contact from './components/Contact';
// import Address from './components/Address';

// import PracticeMultiSwitch from './components/PracticeMultiSwitch';
// import PrtcVideo12 from './components/PrtcVideo12';
// import AlertPractice from './components/AlertPractice';
import Navbar from './components/Navbar';
// import Comp2 from './prtcComponents/Comp2';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import Navbar3 from './components/Navbar3';
// import Alert from './components/Alert';
// import About from './components/About';

// import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// // import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// function App() { 
//         //  video - 10 + 12 + 13
//         // + 
//         // ----------------------REACT ROUTING---------------------------
//         const toggleMode =()=>{
//   if(mode === 'light')
//   {
//     setMode('dark');
//     document.body.style.backgroundColor = '#0d143a';
//     showAlert("Dark Mode has been Enabled","success");
//     document.title = 'TextUtils - Dark Mode';
//     setInterval(() => {
//       document.title = 'TextUtils - You';
      
//     }, 100);
//     setInterval(() => {
//       document.title = 'TextUtils - Fuck';
      
//     }, 110);
//   }
//   else{
//     setMode('light');
//     document.body.style.backgroundColor = 'white';
//     showAlert("Light Mode has been Enabled","success");
//     document.title = 'TextUtils - Light Mode';
//   }
//   }

//   const showAlert =(message,type)=>{
//         setAlert({
//           msg:message,
//           type:type
//         })
//         setTimeout(() => {
//           setAlert(null);
//         }, 2000);
//   }
//   const [mode,setMode] = useState('light');
//   const [alert,setAlert] = useState(null);
//   return (
//       <>
  
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Navbar title="TextUtils" about_us = "About_US" mode ={mode} toggleMode = {toggleMode}/>}>
//       <Route path="/textform" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}></Route>
//       </Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//     );
//   }

function App()
{
  return (
    <>
    <Navbar3></Navbar3>
    </>
  );
}


// ---------------------------------PrtcVideo12----------------------------------------------
// function App() {  
//   // ---------------Video 10 Practice-------------
//   // const [darkMode,setDarkMode] = useState(false);
//   const toggleMode =()=>{
//     if(mode === 'dark'){
//       setMode('light');
//       setSwitchName('Dark Mode');
//       setTextColor('black');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light Mode Enabled","success");
      
//     }
//     else{
//       setMode('dark');
//       setSwitchName('Light Mode');
//       setTextColor('white');
//       document.body.style.backgroundColor = 'grey';
//       showAlert("Dark Mode Enabled","success");
//     }
//   }
  
//   const showAlert=(message,type)=>{
//     setAlert({
//       msg : message,
//       type: type
//     })
//     setTimeout(() => {
//         setAlert(null);
//     }, 2000);
//   }
//   const [mode,setMode] = useState('dark');
//   const [switchName,setSwitchName] = useState('Dark Mode');
//   const [textColor,setTextColor] = useState('black');
//   const [alert,setAlert] = useState(null);
//   return (
//    <>
//    <PrtcVideo12 title='NAVBAR' home = 'HOME' mode = {mode} toggleMode = {toggleMode} switchName = {switchName} textColor={textColor} showAlert={() => showAlert("Clicked on Submit","success")}></PrtcVideo12>
//    <AlertPractice alert = {alert}></AlertPractice>
//    </>
//   );
// }

// import DarkPrtc from './components/DarkPrtc';
// import Form1 from './components/Form1';


// import Navbar from './components/Navbar';
// import About from './components/About';

// import TextForm from './components/TextForm';



// function App() {  
  // ------------video 7-8 React----------------
  //   return (
    //     <>
    //    {/* <Navbar title="TextUtils" about_us = "About_Fuck"/> */}
    //    <Navbar />
    //    <div className="container">
    //    <TextForm heading ="Enter the text to analyse"/>
    //    </div>
    //   </>
    //   );
    // }
    
    // function App()
    // {
      
    //     return(
    //      <>
    //      <Form1></Form1>
    //      </>
    //       );
    //     }
      // function App() {  
      //     // ---------------Video 10 Practice-------------
      //     // const [darkMode,setDarkMode] = useState(false);
      //     return (
      //         <>
      //         {/* <DarkPrtc></DarkPrtc> */}
      //         <Navbar></Navbar>
      //       </>
      //       );
      //     }


      // function App() {  
      //   //  -----------practice PracticeMulitSwitch----------------
      //   const funcDark = () => {
      //     if(dark === 'white'){
      //       setDark('black');
      //       setTextColor('white');
      //     }
      //     else{
      //       setDark('white');
      //       setTextColor('black');  
      //     }
          
      //   };
        
      //   const funcRed = () => {
      //     setDark(dark !== 'red' ? 'red' : 'white');
      //     setTextColor('black');

      //   };
        
      //   const funcGreen = () => {
      //     setDark(dark !== 'green' ? 'green' : 'white');
      //     setTextColor('black');
      //   };

      //   const [dark,setDark] = useState('white');
      //   const [textcolor,setTextColor] = useState('black');
      //     return (
      //         <>
      //        <PracticeMultiSwitch dark ={dark} funcDark ={funcDark} funcRed = {funcRed} funcGreen ={funcGreen} textcolor = {textcolor}></PracticeMultiSwitch>
      //       </>
      //       );
      //     }

  
       
    // function App()
    // {
    //     return
    //     // <Navbar></Navbar>
    //     // <>
    //     // <BrowserRouter>
    //     //  <Routes>
    //     //   <Route path='/' element={<Home></Home>}/>
    //     //   <Route path ='/address' element = {<Address></Address>}/>
    //     //   <Route path ='/contact' element = {<Contact></Contact>}/>
    //     //  </Routes>
    //     // </BrowserRouter>
    //     // </>
    //     <>
    //     <Comp2></Comp2>
    //     </>
       
    // }
          export default App;


          
