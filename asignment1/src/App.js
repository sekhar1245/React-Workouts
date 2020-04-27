import React, { Component } from 'react';
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'
import './UserOutput/UserOutput.css';

import './App.css';

class App extends Component {

state = {

  username : 'sekhar1245'
}

usernameChangeHamdler=(event)=>{
 this.setState({username : event.target.value})
  
}

  render() {
    return (
      <div className="App">
        <h1> Started the assignment</h1>

        <UserInput  click={this.usernameChangeHamdler} currentName={this.state.username} />
        <UserOutput  userName={this.state.username}   />
  
       
      </div>
    );
  }
}

export default App;
