import React from 'react';

const UserInput = (props)=>{

    const inputstyle={
        border :'2px solid red'
    }

return (<div> 
    <input  style = {inputstyle}
    onChange={props.click} 
    type="text"
    value = {props.currentName} /></div>)

};

export default UserInput;