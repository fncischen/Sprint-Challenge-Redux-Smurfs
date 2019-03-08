import React, { Component } from 'react';
import Smurf from "./Smurf";

const SmurfsList = props => {
    return(
        <div className="smurfs-list">
            {props.smurfs.map(a_smurf => 
            <Smurf smurf={a_smurf} delete={props.delete} />   
            )}
        </div>
    )
} 

export default SmurfsList;