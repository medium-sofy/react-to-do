import { useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {

  const [todos, setTodos] =useState( [
    'Go to the gym',
    'Eat more fruits and vegies',
    'Pickup the kids from school'
  ])


  return (
      <>
        <ToDoInput/>
        <ToDoList todos={todos}/>
      </>
  )
}

export default App
