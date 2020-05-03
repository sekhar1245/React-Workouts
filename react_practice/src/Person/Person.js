import React from 'react';

const person = (props)=>{

   return ( 
   <div onClick={props.click}> 
       <p> This is {props.name} and I am {props.age}'s years old</p> 
        <h4 >{props.children}</h4>
        <input type="text" onChange={props.changed} />

   </div>
    )

    
};

export default person;