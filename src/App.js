import './App.css';
import React, { useState } from "react";
import InputPreviewer from './Components/InputPreviewer';
import Navbar from "./Components/Navbar";


function App() {
  const [mode, setmode] = useState("light"); // Whether dark mode is enabled or not.
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2e2948";
      document.body.style.color = "White";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
      document.body.style.color = "Black";
    }
  };
  return (
    <>
     <Navbar mode={mode} toggleMode={toggleMode} />
     <InputPreviewer />
    </>
  );
}

export default App;
