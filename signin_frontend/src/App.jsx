import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Signin } from './components/signin'

function App() {
  return(
    <div>
      <h1>Todo List</h1>
      <Signin></Signin>
    </div>
  )
}

export default App
