import React, { Component } from 'react';
import Person from './Person/Person.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Started react learning...!</h1>
        <Person   name="sekhar" age="31"/>
        <Person  name="Manu" age="32"> Play chess is my hobbie</Person>
        <Person name="Bharat" age="33"/>

      </div>
    );
  }
}

export default App;
