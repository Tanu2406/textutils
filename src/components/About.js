import React,{useState} from 'react'

export default function About(props) {
    
    let myStyle = {
        color:props.mode === 'dark'?'white':'#042743',
        backgroundColor:props.mode === 'dark'?'rgb(36 74 104)':'white'
        
    }

    // const [myStyle, setmyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");

    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }
  return (
    <div className='container' >
        <h1 className='my-3' style={{color:props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and efficiently. be it word count, character count or
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              <strong>Free to use</strong> 
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
            Textutils is a free character counter tool that provides instant character count & word statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
               <strong>Browser Compatible</strong> 
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as chrome, firefox,internet explore,safari,opera. It suits to count character in facebook,blog,books,excel document,pdf document,assays,etc.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
          <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div> */}
    </div>
  )
}
