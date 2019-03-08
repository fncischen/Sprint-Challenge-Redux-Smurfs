import React, { Component } from 'react';
import './App.css';

import {SmurfsList} from "./Components";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {

  }

  toggle = (e,id) => {
    
  }

  render() {
    return (
      <div className="App">
        <SmurfsList smurfs={this.props.smurfs} toggle={this.props.toggle} />
      </div>
    );
  }
}

export default App;
