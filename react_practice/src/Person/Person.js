import React from 'react';

const person = (props)=>{

   return ( 
   <div> 
       <p> This is {props.name} and I am {props.age}'s years old</p> 

       <h4 >{props.children}</h4>


   </div>
    )

    
};

export default person;