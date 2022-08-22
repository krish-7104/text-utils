import React from "react";
import { useState } from "react";

const TextArea = (props) => {
  const [text, setText] = useState("");
  const textChanged = (event) => {
    setText(event.target.value);
  };
  const toUpperCase = () => {
    let ntext = text.toUpperCase();
    setText(ntext);
  };
  const toLowerCase = () => {
    let ntext = text.toLowerCase();
    setText(ntext);
  };
  const clearText = () => {
    setText("");
  };
  const removeSpace = () => {
    let ntext = text.split(/[ ]+/);
    setText(ntext.join(" "));
  };
  return (
    <React.StrictMode>
      <div className="container my-5 h-100">
        <h3>{props.title}</h3>
        <div className="mb-4">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            onChange={textChanged}
          ></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={toUpperCase}>
          Uppercase
        </button>
        <button className="btn btn-success me-3" onClick={toLowerCase}>
          Lowercase
        </button>
        <button className="btn btn-primary me-3" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-success me-3" onClick={removeSpace}>
          Remove Extra Space
        </button>
        <div className="card p-2 my-2">
          Total Words: {text.length != 0 ? text.split(" ").length - 1 : 0}
        </div>
        <div className="card p-2 my-2">Total Letters: {text.length}</div>
        <div className="card p-2 my-2">
          Time Required To Read:{" "}
          {text.split(" ").length - 1 != 0
            ? (text.split(" ").length / 130).toFixed(4)
            : 0}{" "}
          min
        </div>
      </div>
    </React.StrictMode>
  );
};

export default TextArea;
