import React, { Component } from 'react';
import './App.css';

import SmurfsList from "./SmurfsList";

// importing action creators

import {addingSmurf, gettingSmurfs, deletingSmurf} from "../actions";

import { connect } from 'react-redux'; 


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  constructor(props) {
    super(props)
    // console.log(this.props.gettingSmurfs);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  // for updating the smurfsList after recieving updates from the store
  componentDidMount() {
    console.log("dispatching action!", this.props.gettingSmurfs)
    this.props.gettingSmurfs;
  }

  // send delete smurf action 
  delete = (e,id) => {
    e.preventDefault();
    this.props.deletingSmurf(id);
  }

  // send add smurf action, with the handleChanges state as arguments sent to action creators
  addSmurf = e => {
    e.preventDefault();
    const data = {name: this.state.name, age: this.state.age, height: this.state.height};
    this.props.addingSmurf(data)

  }

  handleChanges = e => {
    e.preventDefault()
    console.log([e.target.name],[e.target.value]);
    this.setState({[e.target.name]: [e.target.value]});
  }

  render() {
    console.log(this.props.gettingSmurfs);
    console.log(this.props);
    if (this.props.fetchingSmurfs != true) {
      return(
        <div className="smurfs">
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <SmurfsList smurfs={this.props.smurfs} delete={this.delete} />

          <form onSubmit={this.addSmurf}>
            <b>Name:</b><input type="text" name="name" value={this.state.name} onChange={this.handleChanges}></input>    
            <b>Age:</b><input type="text" name="age" value={this.state.age} onChange={this.handleChanges}></input> 
            <b>Height:</b><input type="text" name="height" value={this.state.height} onChange={this.handleChanges}></input> 
          </form>
        </div>
      );
      }
  }
}

const mapStateToProps = state => {
  console.log("This State:", state)
  return {
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetching,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: null
  }
}

export default connect(mapStateToProps, {addingSmurf,gettingSmurfs,deletingSmurf})(App);
