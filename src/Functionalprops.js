import React from 'react'

export default function Functionalprops(Props){
    return(
        <div>
            
            <h1>{Props.data.fname}</h1>
            <h1>{Props.info.lname}</h1>
            
        </div>
    );
}