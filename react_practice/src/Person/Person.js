import React from 'react';
//import './Person.css';
import styled from 'styled-components';

const StyledDiv =   styled.div`
width: 60%;
margin: 16px auto;
box-shadow: 0 2px  3px #ccc;
border: 1px solid #eee;
text-align:center;
padding:16px; 
@media (min-width:500px){
    width: 450px;
}
 `;

const person = (props)=>{

     /* const style = {
        '@media (min-width:500px':{

            width:'450px'
            
            

        }
    } */

   return ( 
   //<div className ="Person" style={style} onClick={props.click}> 
     
    <StyledDiv>
       <p> This is {props.name} and I am {props.age}'s years old</p> 
        <h4 >{props.children}</h4>
        <input type="text" onChange={props.changed}  value={props.name} />

    </StyledDiv>
    )

    
};

export default person;