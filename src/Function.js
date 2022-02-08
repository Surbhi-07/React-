import React from "react";
export default function Function (prop){
    const red=()=>{
        alert("red function called")
    }
    return(
        <div>
            <h1 onClick={red}>{prop.text}</h1>
            <h1 onClick={red}>Hello function componets!!!</h1>
        </div>
    );
    };