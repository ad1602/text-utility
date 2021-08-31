
import React, { useState } from 'react'


export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleOnClick = function () {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase.","Success");
    }
    const handleOnClick3 = function () {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase.","Success");
    }
    const handleOnClick2 = function () {

        setText("");
        props.showAlert("Cleared Text.","Success");
    }
    const handleLineThrough = function () {
        let newText=document.getElementById("textbox").style.textDecoration="line-through";
        setText(newText);
        props.showAlert("Converted to line-through text.","Success");
    }
    const handleBold = function () {
        let newText=document.getElementById("textbox");
        newText.classList.add("bold");
        props.showAlert("Converted to bold text.","Success");
    }
    const handleItalics = function () {
        document.getElementById("textbox").style.fontStyle="italic";
        setText(text);
        props.showAlert("Converted to italic text.","Success");
    }
    

    const handleCopyText = function () {
        let copy = document.getElementById("textbox");
        copy.select();
        navigator.clipboard.writeText(copy.value);
        props.showAlert("Copied text.","Success");
    }
    const handleExtraSpaces = function () {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces.","Success");
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <div className="container my-3">
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} id="textbox" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#223a2e' ,color: props.mode === 'light' ? 'black' : 'white'}} placeholder="put your text here" rows="10"></textarea>
                    </div>
                    <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleOnClick}>To Upper Case</button>
                    <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleOnClick3}>To Lower Case</button>
                    <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleOnClick2}>Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleCopyText}>Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleLineThrough}>Strike Through</button>
                    <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleBold}>Bold</button>
                    <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleItalics}>Italics</button>

                </div>
                <div className="container">
                    <h2>Your text summary:</h2>
                    <p>{text.length} characters<br/> {text.split(" ").filter((element) => { return element.length !== 0 }).length} words <br /> time to read: {Math.ceil(0.25 * (text.split(" ").length) - 1)} seconds</p>
                </div>
                <div className="container" style={{display : text.length===0 ?'none': 'block'}}>
                <h2>Your text preview:</h2>
                 <p>{text}</p>
                </div>
            </div>
            <footer className={`text-${props.mode==='dark'?'light':'dark'}`}><p>Made with ❤ By Abhishek</p></footer>
        </>
    )
}
