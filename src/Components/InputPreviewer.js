import React from "react";
import { useState } from "react";
import { marked } from "marked";
import Preview from "./Preview";

export default function InputPreviewer() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
    setEqualHeight();
  };

  const pasteText = () => {
    navigator.clipboard.readText().then((cliptext) => setText(cliptext));
  };

  const copyText = () => {
    var text = document.getElementById("preview");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  function setEqualHeight() {
    var textarea1Height = document.getElementById('editor').scrollHeight;
    var divHeight = document.getElementById('preview').scrollHeight;
    
    var maxHeight = Math.max(textarea1Height, divHeight);
    
    document.getElementById('editor').style.height = maxHeight + 'px';
    document.getElementById('preview').style.height = maxHeight + 'px';
  }

  const markdownText = text;
  const htmlText = marked(markdownText);
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <div
            id="editorToolbox"
            style={{
              width: "100%",
              height: "60px",
              backgroundColor: "lightblue",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <i className="fa-solid fa-pen-to-square fa-2xl mx-2"></i>
              <h2>Editor</h2>
            </div>
            <div
              className="container"
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button onClick={copyText}>
                <i className="fa-solid fa-copy fa-2xl mx-2"></i>
              </button>
              <button onClick={pasteText}>
                <i className="fa-solid fa-paste fa-2xl mx-2"></i>
              </button>
              <button>
                <i className="fa-solid fa-window-maximize fa-2xl mx-2"></i>
              </button>
            </div>
          </div>
          <textarea
            id="editor"
            value={text}
            onChange={handleOnChange}
            type="text"
            style={{
              width: "100%",
              minHeight: "auto"
            }}
          ></textarea>
        </div>
        <Preview htmlText={htmlText} />
      </div>
    </>
  );
}
