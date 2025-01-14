import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to uppercase!","success");
    }
    const handleLoClick = ()=>{
       
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Convert to lowercase!","success");
     }
     const handleClearClick = ()=>{
       
         let newText = " ";
         setText(newText);
         props.showAlert("Text Cleared!","success");
     }
     const handleCopyClick = ()=>{
       navigator.clipboard.writeText(text);
       props.showAlert("Text Copied!","success");
    }
    
     const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#0e284e'}} >
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white' , color: props.mode === 'dark'?'white':'#0e284e'}} id="myBox" rows="8"></textarea>
        </div>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>   Convert to Uppercase  </button>
        
         <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>   Convert to LowerCase  </button>
        
         <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>  Clear Text </button>
         <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>  Select Text </button>
      
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#0e284e'}}>
        <h2>Your text summery</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}