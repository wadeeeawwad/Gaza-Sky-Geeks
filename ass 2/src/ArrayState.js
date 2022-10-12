import React from "react";
export default function ArrayState(props) {

    const arr = props.item;
  
    return (
      <div >
        <div >
          <h1>{props.name}</h1>
          <ul>
            {arr.map((element, index) => <li key={index}>{element}</li>)}
          </ul>
        </div>
        
      </div>
    );
  }