import React,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useParams } from 'react-router-dom'; 
import './App.css'
import { Todos } from './components/Todo'
import { CreateTodo } from './components/CreateTodo';

function App() {
  const [todos , setTodos]=useState([]);
  const queryParameters = new URLSearchParams(window.location.search)
  const username = queryParameters.get("username");

  // wrong way of updating todoss
  // useEffect hook is the correct way 

  useEffect(()=>{
    fetch(`http://localhost:3000/todos/`,{
      headers : {
        "username": username,
        "Content-type": "application/json"
      }
    }).then(async function(res){
      const json = await res.json();
      setTodos(json);
    })
  },[todos]);

  return(  
  <div className='todo_app'>
    <span  className='mainh1'><h1 style={{"font-size": "40px" , "color":"#39A7FF"}}>What's The Plan For Today?</h1></span>
    <CreateTodo username={username}></CreateTodo>
    <Todos todos={todos}></Todos>
  </div>
  )
}

export default App
