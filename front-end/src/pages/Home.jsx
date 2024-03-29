import { useState,useEffect } from "react";
import { CreateTodo } from "../components/CreateTodo";
import { Todos } from "../components/Todo";
import './Home.css';

export const Home=()=>{
    const [todos , setTodos]=useState([]);
  const queryParameters = new URLSearchParams(window.location.search)
  const username = queryParameters.get("username");

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