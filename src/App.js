import "./App.css";
import React, { useState } from "react";
import InputPreviewer from "./Components/InputPreviewer";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [mode, setmode] = useState("light"); // Whether dark mode is enabled or not.
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#291472";
      document.body.style.color = "White";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "rgb(186 168 255)";
      document.body.style.color = "Black";
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <InputPreviewer mode={mode} />
      <Footer />
    </>
  );
}

export default App;
