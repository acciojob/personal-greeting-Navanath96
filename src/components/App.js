
import React,{useState} from "react";
import './../styles/App.css';
import input from "./input"

const App = () => {
  let [inputtext, setinputtext]=useState();
  return (
    <div>
        {/* Do not remove the main div */}
        <input  setinput={setinputtext}/>
        {
          inputtext && <h>Hello {inputtext}</h>
}
    </div>
  )
}

export default App
