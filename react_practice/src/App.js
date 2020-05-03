import React, { Component } from 'react';
import Person from './Person/Person.js';


class App extends Component {
  state = {

    persons:[
      {name: 'chandrasekhar' , age: 31},
      {name: 'Ramki' , age: 32},
      {name: 'Naresh' , age: 33}
    ]
  }

  switchNameHandler = () => {

    this.setState({

      
      persons:[
        {name: 'sekhar1245' , age: 31},
        {name: 'Ramki45' , age: 32},
        {name: 'Naresh45' , age: 33}
      ]

    });

  }
  render() {
    return (
      <div className="App">
        <h1>Started react learning...!</h1>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        <Person   name={this.state.persons[0].name} age= {this.state.persons[0].age} />
        <Person  name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbie: chess</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].namage}/>

      </div>
    );
  }
}

export default App;
