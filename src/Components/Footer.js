import React from "react";

export default function Footer() {
  return (
    <>
      <div
        style={{
          color: "white",
          backgroundColor: "#212529",
          height: "50px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p
          style={{
            fontFamily: "Library",
            width: "50%",
            paddingLeft: "20px",
            marginBottom: "0px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Markup Monitor
        </p>
        <p
          style={{
            fontFamily: "Satisfy-Regular",
            width: "50%",
            marginBottom: "0px",
            paddingRight: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          by Amaan Shamim Khan
        </p>
      </div>
    </>
  );
}
