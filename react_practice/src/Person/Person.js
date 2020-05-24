import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props)=>{

   return ( 
   <div className ="Person" onClick={props.click}> 
       <p> This is {props.name} and I am {props.age}'s years old</p> 
        <h4 >{props.children}</h4>
        <input type="text" onChange={props.changed}  value={props.name} />

   </div>
    )

    
};

export default Radium(person);