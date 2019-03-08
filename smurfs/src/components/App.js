import React, { Component } from 'react';
import './App.css';

import SmurfsList from "./SmurfsList";

// importing action creators

import {addingSmurf, gettingSmurfs, deletingSmurf} from "./actions";

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

    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  // for updating the smurfsList after recieving updates from the store
  componentDidMount() {
    // if(this.props.fetchingSmurfs) {

    // }

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
    return (
      <div className="App">
        <SmurfsList smurfs={this.props.smurfs} delete={this.delete} />

        <form onSubmit={this.addSmurf}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChanges}></input>    
          <input type="text" name="age" value={this.state.age} onChange={this.handleChanges}></input> 
          <input type="text" name="height" value={this.state.height} onChange={this.handleChanges}></input> 
        </form>
      </div>
    );
  }
}

const mapStateToProps = {
  smurfs: this.state.smurfs,
  fetchingSmurfs: this.state.fetching,
  addingSmurf: this.state.addingSmurf,
  updatingSmurf: this.state.updatingSmurf,
  deletingSmurf: this.state.deletingSmurf,
  error: null
}

export default connect(mapStateToProps, {addingSmurf,gettingSmurfs,deletingSmurf})(App);
