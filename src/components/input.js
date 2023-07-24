import React from "react";

function input(){
    return(
        <div>
            <input type="text"
            onChange={(e)=>{
                setinput(e.target.value);
            }}
            />
        </div>
    )
}
export default input;