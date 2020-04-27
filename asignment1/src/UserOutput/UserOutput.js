import React from 'react';
import './UserOutput.css';
 

const UserOutput = (props)=>{


return <div className="UserOutput"> 
<p>UserName: {props.userName}</p> 
<p>It will be overwrittwn soon</p></div>

};

export default UserOutput;