import React from "react";
import "./Preview.css";

export default function Preview(props) {
  return (
    <>
      <div
        id="preview"
        style={{
          padding: "10px"
        }}
        dangerouslySetInnerHTML={{ __html: props.htmlText }}
      ></div>
    </>
  );
}
