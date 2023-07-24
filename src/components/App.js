
import React,{useState} from "react";
import './../styles/App.css';
import input from "./input"

const App = () => {
  let [inputtext, setinputtext]=useState();
  return (
    <div>
        {/* Do not remove the main div */}
        <p>
        <input  setinput={setinputtext}/>
        {
          inputtext && <h>Hello {inputtext}</h>
}
</p>
    </div>
  )
}

export default App
