import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/todo'
import Button from './components/Button'
import Counters from './components/Counters'

function App() {

  const [todos, setTodos] = useState([])

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (id) => {
    
    setTodos(todos.map(todo => {
      return todo.id !== id ? todo : {
        ...todo,
        checked: !todo.checked
      }
    }))
  }

  const addTodo = () => {
    console.log("Agregar una tarea a nuestro listado")

    const newTodo = {
      id: new Date().getTime(), // Usualmente los IDs podrian ser generados con UUID o sino delegarlo al identificador en BD.
      title: prompt("Task title: "),
      checked: false
    }
    if (newTodo.title) {
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
            return <Todo key={todo.id} todo={todo} onDelete={removeTodo} onChange={updateTodo} />
          })
        }
      </ul>
    </div>
  )
}

export default App
