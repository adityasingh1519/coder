import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");

  const handleOnChange = (event) => {
    // console.log(" this is handkle change ");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    // console.log("Convert to upper case");
  };

  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    // console.log("Convert to upper case");
  };

  const handCopy = () => {
    // let textc = document.getElementById("box")

    // navigator.clipboard.writeText(textc.value);

    navigator.clipboard.writeText(text);
  };

  const handleSpace = () => {
    let textA = text.split(/[ ]+/);
    setText(textA.join(" "));
  };

  const clearClick = () => {
    setText("");
  };

  return (
    <>
      <div >
        <div className="container   mt-4">
          <label className=" h2" style={{color: props.mode === 'light'?'black':'white'}}>{props.heading}</label>
          <textarea
            className="form-control "
            id="box"
            rows={8}
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here "
            style={{backgroundColor: props.mode === 'light'?'white':'black'}}
          ></textarea>

          <button className="btn btn-danger mt-3 me-2" onClick={clearClick}>
            Clear
          </button>

          <button className="btn btn-primary mt-3 mx-2 " onClick={handCopy}>
            Copy
          </button>

          <button className="btn btn-primary mt-3 mx-2 " onClick={handleSpace}>
            Remove Space
          </button>

          <button
            className="btn btn-primary mt-3 mx-2 "
            onClick={handleUpClick}
          >
            Convert To UpperCase
          </button>

          <button
            className="btn btn-primary mt-3 mx-2"
            onClick={handleLowClick}
          >
            Convert To LowerCase
          </button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
          <h2 className="h2">Text Summary here</h2>
          <p>
            your text has {text.split(" ").length} words and {text.length}{" "}
            character
          </p>
          <p>{0.0008 * text.split(" ").length} Minutes read</p>
        </div>
      </div>
    </>
  );
}
