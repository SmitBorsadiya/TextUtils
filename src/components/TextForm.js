import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("UpperCase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleTextToSpeech = () => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text; //  text what you written
        window.speechSynthesis.speak(msg);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success");
    }

    const handleOnChange = (event) => {
        // console.log("HandleOnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="8" placeholder="Enter you Text"></textarea>
                </div>

                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTextToSpeech}>Click to Speech</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minute Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>
            </div>
        </>
    )
}
