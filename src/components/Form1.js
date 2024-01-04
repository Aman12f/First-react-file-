import React, { useState } from 'react'

export default function Form1(props) {

  const handleOnchange =(event)=>{
    console.log('Hii this is onchange');
    setText(event.target.value);
  }
  
  const onClickUpper =()=>{
    //   console.log('onclick clicked');
    //   setText('Fuck You');
    let temp = text.toUpperCase();
    setText(temp);
  }
  const onClickLower =()=>{
    let temp = text.toLowerCase();
    setText(temp);
  }
  const onClickClear =()=>{
    setText('');
  }
  const [text,setText] = useState('Click Here to Submit');
//   setText("Enter Your Name");

  return (
    <>
     <div>
      <textarea name="" id="" cols="50" rows="10" onChange={handleOnchange} value={text}>Hii this is text area </textarea>
      </div>
      <div>
      <button onClick={onClickUpper} className='btn btn-primary mx-1'>Upper Case</button>
      <button onClick={onClickLower} className='btn btn-primary mx-1'>Lower Case</button>
      <button onClick={onClickClear} className='btn btn-primary mx-1'>Clear</button>
      </div>
      <div>
        <p>Words:{text.length}</p>
        <p>Letters: {text.split(" ").length}</p>
        <p>Preview : {text}</p>
      </div>

    </>

  )
}
