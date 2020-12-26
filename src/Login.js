import React,{useState} from "react";
import {TextField , Container, Button}  from '@material-ui/core';

function Login(){

  
  const[state,setState]=useState({email:"",password:""});
  
  function handleChange(event){
    const newState = {...state};
    newState[event.target.id]= event.target.value;
    setState(newState)
    
  } 
  
  function submit(event){
    event.preventDefault()
    console.log(state)
  } 

  return(
    <div> 
    <Container maxWidth="sm">
   <form  noValidate autoComplete="off" onSubmit={submit}>
   
  <TextField value={state.email} id="email" label="Email" variant="outlined" onChange={handleChange} />
  <TextField value={state.password} id="password" label="Password" variant="outlined" onChange={handleChange}/>
  <Button variant="contained" color="primary" type="submit">
  Login 
  </Button>
  </form> 
  </Container>
    </div> 
  )
}

export default Login; 