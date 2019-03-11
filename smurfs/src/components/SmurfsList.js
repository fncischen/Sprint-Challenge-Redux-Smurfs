import React, { Component } from 'react';
import Smurf from "./Smurf";

import { connect } from 'react-redux'; 

const SmurfsList = props => {
    console.log("These smurfs:",props.smurfs)
    return(
        <div className="smurfs-list">
            {props.smurfs.map(a_smurf => 
            <Smurf smurf={a_smurf} delete={props.delete} />   
            )}
        </div>
    )
} 

// const mapStateToProps = state => {
//     return {
//         smurfs: state.smurfs
//     }
// }

export default SmurfsList;