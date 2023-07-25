
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [inputtext, setinputtext]=useState();
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter Your name:</p>
        <input type="text" onChange={(e)=>(setinputtext(e.target.value))}/>


        {
          inputtext && <p>Hello {inputtext}!</p>
        }
    </div>
  )
}

export default App
