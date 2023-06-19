import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/about";

import React, {useState} from 'react'

function App() {

  let [mode,SetMode] = useState('light'); //wether it is enabled or not 
  const togglemode = () => {

    if(mode === 'dark')
    {
      SetMode('light')
      document.body.style.backgroundColor = 'white';
    }
    else
    {
      SetMode('dark')
      document.body.style.backgroundColor = 'black';
    }
  }

  return (
    <div className="blank">
      < Navbar title = "TextStyle" mode = {mode} togglemode = {togglemode}/>
      {/* <Navbar  /> */}
      <TextForm heading = "This is a text area " mode = {mode}/>

      

      {/* <About/> */}
      
    </div>
  );
}

export default App;
