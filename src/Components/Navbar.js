import React from 'react'

export default function Navbar(props) {
  return (
    <>
      <div className="container d-flex justify-content-between my-4">
        <h1 style={{
            fontFamily: "Library"
        }}>Markup Monitor</h1>
        <div style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
        }}>
          {props.mode==="dark"?<i onClick={props.toggleMode} className="fa-solid fa-sun fa-2xl"></i>:<i onClick={props.toggleMode} className="fa-solid fa-moon fa-2xl"></i>}
        </div>
      </div>
    </>
  )
}
