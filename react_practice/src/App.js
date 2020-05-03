import React, { Component } from 'react';
import Person from './Person/Person.js';


class App extends Component {
  state = {

    persons:[
      {name: 'chandrasekhar' , age: 31},
      {name: 'Ramki' , age: 32},
      {name: 'Naresh' , age: 33}
    ],
    Author:'Sekhar1245'
  }

  //two ways we can pass method references between components
  //1.Binding method as an argument
  //2.wrapping method invocation to anonymous function 
  switchNameHandler = (newName) => {

    // we shouldnt mutate like below ,React will not recognise 
    // this.state.persons[0].name="sekhar1245";   

    this.setState({

      
      persons:[
        {name: newName , age: 21},
        {name: 'Ramki45' , age: 22},
        {name: 'Naresh45' , age: 23}
      ]

    });

  }

  nameChangeHandler = (event) =>{

    this.setState({
      persons:[
        {name: "chandrasekhar" , age: 21},
        {name: event.target.value , age: 22},
        {name: 'Naresh45' , age: 23}
      ]

    });


  }
  render() {
    return (
      <div className="App">
        <h1>Started react learning...!</h1>
        <button onClick={() => this.switchNameHandler("chandru.....!")}> Switch Name</button>
        <Person   
        name={this.state.persons[0].name} 
        age= {this.state.persons[0].age} />
        <Person  
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,"chandru1245.....!")}
        changed={this.nameChangeHandler}>My hobbie: chess</Person>
        <Person n
        ame={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>

      </div>
    );
  }
}

export default App;
