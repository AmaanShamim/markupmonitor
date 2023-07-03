import React from "react";
import { useState } from "react";
import { marked } from "marked";
import Preview from "./Preview";

export default function InputPreviewer(props) {
  const [text, setText] = useState("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n ```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n    - Some are bulleted.\n       - With different indentation levels.\n          - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n");

  const handleOnChange = (event) => {
    setText(event.target.value);
    setEqualHeight();
  };

  // const pasteText = () => {
  //   navigator.clipboard.readText().then((cliptext) => setText(cliptext));
  // };

  // const copyText = () => {
  //   var text = document.getElementById("preview");
  //   text.select();
  //   navigator.clipboard.writeText(text.value);
  // };

  function setEqualHeight() {
    var textarea1Height = document.getElementById("editor").scrollHeight;
    var divHeight = document.getElementById("preview").scrollHeight;

    var maxHeight = Math.max(textarea1Height, divHeight);

    document.getElementById("editor").style.height = maxHeight + "px";
    document.getElementById("preview").style.height = maxHeight + "px";
  }
  const markdownText = text;
  const htmlText = marked(markdownText);

  window.onload = function() {
    setEqualHeight();
  };
  
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
            margin: "10px"
          }}
        >
          <div
            id="editorToolbox"
            style={{
              width: "100%",
              height: "60px",
              color: props.mode === "light" ? "white" : "white",
              backgroundColor: "#212529",
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
            {/* <div
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
            </div> */}
          </div>
          <textarea
            id="editor"
            value={text}
            onChange={handleOnChange}
            type="text"
            rows={23}
            style={{
              width: "100%",
              minHeight: "auto",
            }}
          ></textarea>
        </div>
        <div
          style={{
            width: "50%",
            backgroundColor: props.mode === "light" ? "rgb(216 205 255)" : "rgb(94 70 179)",
            overflowWrap: "break-word",
            margin: "10px 10px 17px 10px",
          }}
        >
          <div
            id="previewToolbox"
            style={{
              color: props.mode === "light" ? "white" : "white",
              backgroundColor: "#212529",
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
                height: "61px",
              }}
            >
              <i className="fa-solid fa-eye fa-2xl mx-2"></i>
              <h2>Preview</h2>
            </div>
            {/* <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button>
                <i className="fa-solid fa-window-maximize fa-2xl mx-2"></i>
              </button>
            </div> */}
          </div>
          <Preview htmlText={htmlText} />
        </div>
      </div>
    </>
  );
}
