import React, { Component } from 'react';

const Smurf = props => {
    console.log("Smurf:", props.smurf.id)
    return(
        <div className="smurf">
        <ul>
        <li>{props.smurf.name}</li>
        <li>{props.smurf.age}</li>
        <li>{props.smurf.height}</li>
        </ul>

        <button onClick={() => {props.delete(props.smurf.id)}}>Delete</button>
        </div>
    )
} 

export default Smurf;