import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUPClick = () => {
        //console.log("Upper case was clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "Success")
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "Success")
    }

    const clearCase = ()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("Cleared the text", "Success")
    }

    const titleCase = ()=>{
        let newText = text.split(' ').map(function (word, index) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
            .join(' ');
            setText(newText);
            props.showAlert("Caplitalized first letter to upper case", "Success")
    }

    const alternateCase = () => {
        let newText = text.split("").map(function (word, i){
        for (let i = 0; i < newText.length; i++) {
            if(i % 2 == 0 ){
                word.toUpperCase();
            }else{
                word.toLowerCase();
            }
        } 
    })
        .join(' ');
        setText(newText);

    // let chars = text.toLowerCase().split("");
    // for (let i = 0; i < chars.length; i += 2) {
    //   chars[i] = chars[i].toUpperCase();
    // }
    // return chars.join("");
    }

    const handleOnChange = (event) => {
        //console.log("OnChanged")
        setText(event.target.value);
    }

    const[text, setText] = useState('Enter text here');
    //setText("New Text");
  return (
      <>
      <div className="container" style={{color: props.mode ==='light'?'black':'white'}}>
      <div>
        <h1>{props.title}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode ==='light'?'white':'black' , color: props.mode ==='light'?'black':'white'}} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-1" onClick={handleUPClick}>Convert to UpperCase</button>
        <button className="btn btn-outline-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-outline-primary mx-1" onClick={clearCase}>Clear the text</button>
        <button className="btn btn-outline-primary mx-3" onClick={titleCase}>Capital Title Word</button>
        <button className="btn btn-outline-primary mx-3" onClick={alternateCase}>Alternate Word</button>
      </div>

      <div className="container my-4">
          <h1>Text Summary</h1>
          <p>{text.split(" ").length-1} words & {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes to read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Enter the text to preview"}</p>
      </div>
      </div>
      </>
  );
}