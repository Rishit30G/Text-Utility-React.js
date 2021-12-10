import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    setText(text.toUpperCase());
    props.showAlert("Changed to Uppercase!", "success");
  }; 
  
  const handleLoClick = () => {
    // console.log("LowerCase was clicked");
    setText(text.toLowerCase());
    props.showAlert("Changed to Lowercase!", "success");
  }; 
  
  
  const handleOnChange = (event) => {
    // console.log(" On Change");
    setText(event.target.value);
  };      
  
  
  const [text, setText] = useState("Enter text here" );
  return (
    <>
    <div className="container" style={{color:props.mode === 'light'?'black':'white'}}>
      <h1 className="mb-2">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'white':'black', color:props.mode === 'light'?'black':'grey'}}id="myBox" rows="6"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div>
        <div className="container my-3" style={{color:props.mode === 'light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p style={{color: "grey"}}>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>
    </div>
    </>
  );
} 
