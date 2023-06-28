import React from 'react'

export default function Preview(props) {
  return (
    <>
      <div
          style={{
            width: "50%",
            backgroundColor: "lightyellow",
            overflowWrap: "break-word"
          }}
        >
          <div
            id="previewToolbox"
            style={{
              backgroundColor: "greenyellow",
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
                height: "60px",
              }}
            >
              <i className="fa-solid fa-eye fa-2xl mx-2"></i>
              <h2>Preview</h2>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button>
                <i className="fa-solid fa-window-maximize fa-2xl mx-2"></i>
              </button>
            </div>
          </div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: props.htmlText }}
          ></div>
        </div>
    </>
  )
}
