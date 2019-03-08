import React, { Component } from 'react';
import './App.css';

import {SmurfsList} from "./";
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
      email: "",
      age: ""
    };
  }

  // for updating the smurfsList after recieving updates from the store
  componentDidMount() {

  }

  // send delete smurf action 
  delete = (e,id) => {

  }

  // send add smurf action, with the handleChanges state as arguments sent to action creators
  addSmurf = e => {


  }

  handleChanges = e => {
    e.preventDefault()
    console.log([e.target.name],[e.target.value]);
    this.setState({[e.target.name]: [e.target.value]});
  }

  render() {
    return (
      <div className="App">
        <SmurfsList smurfs={this.props.smurfs} delete={this.props.delete} />

        <form onSubmit={this.addSmurf}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChanges}></input>    
          <input type="text" name="email" value={this.state.email} onChange={this.handleChanges}></input> 
          <input type="text" name="age" value={this.state.age} onChange={this.handleChanges}></input> 
        </form>
      </div>
    );
  }
}

export default App;
