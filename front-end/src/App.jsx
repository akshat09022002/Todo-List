import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/Todo'

function App() {
  const [todos , setTodos]=useState([]);

  // wrong way of updating todos
  // useEffect hook is the correct way
  fetch('http://localhost:3000/todos').then(async function(res){
    const json = await res.json();
    setTodos(json);
  })

  return( 
  <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
  </div>
  )
}

export default App
