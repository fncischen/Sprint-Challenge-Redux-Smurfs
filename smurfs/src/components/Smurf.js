import React, { Component } from 'react';

export default Smurf = props => {
    return(
        <div className="smurf" onClick={props.toggle}>
        <ul>
        <li>{props.smurf.name}</li>
        <li>{props.smurf.age}</li>
        <li>{props.smurf.email}</li>
        </ul>
        </div>
    )
} 