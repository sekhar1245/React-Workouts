import React, { Component } from 'react';
import './App.css'; 
import Person from './Person/Person.js';


class App extends Component {
  state = {

    persons:[
      {name: 'chandrasekhar' , age: 31},
      {name: 'Ramki' , age: 32},
      {name: 'Naresh' , age: 33}
    ],
    Author:'Sekhar1245',
    otherState:'some other value',
    showPersons:false
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

  togglePersonHandler = () => {

    const doesShow = this.state.showPersons;

    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) =>{

    //below line is directly mutating the original react data its not good practice so we are creating local copy using slice or spread operator
    //const persons = this.state.persons;
    const persons = this.state.persons.slice();

    //using spread operator 
    //const persons =[...this.state.persons];
    
    persons.splice(personIndex,1);
    this.setState({persons:persons});
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

    const styles= {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
      };


      let persons =null;

      if(this.state.showPersons){
        persons=(
          <div> 
          { this.state.persons.map( (person,index) =>{

            return <Person 
            click ={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} 
             />

          })}
          </div>

        
        )


      }

    return (
      <div className="App">
        <h1>Started React learning...!</h1>
        <button  style ={styles} onClick={() => this.togglePersonHandler()}> Toggle Persons</button>
       
      {persons}
        
     
       

      </div>
    );
  }
}

export default App;
