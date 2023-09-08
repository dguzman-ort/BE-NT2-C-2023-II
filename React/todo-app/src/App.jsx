import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/todo'
import Button from './components/Button'
import Counters from './components/Counters'

function App() {

  const [todos, setTodos] = useState([])
  
  const addTodo = () => {
    console.log("Agregar una tarea a nuestro listado")

    const newTodo = {
      id: new Date().getTime(),
      title: prompt("Task title: "),
      checked: false
    }
    if (newTodo.title){
      //agrego tarea al array de tareas.
      console.log("Nueva tarea: ", newTodo, todos)
      
      setTodos([...todos, newTodo])
    }
    
  }

  return (
    <div className="container center">
        <h1 className="center title">TODO App</h1>

        <Counters todos={todos} />

        <Button title={'Add TODO'} className={'button center'} callback={addTodo} />

        <ul id='todo-list' className='todo-list'>
          {
            todos.map(todo => {
              return <Todo key={todo.id} todo={todo} />
            })
          }
        </ul>
    </div>
  )
}

export default App
