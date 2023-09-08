import Button from "../Button"

const Todo = ({ todo }) => {
  return (
    <li className='todo-container'>
      <input type={'checkbox'} className={'todo-checkbox'} checked={todo.checked} />
      <span className={'title'}>{todo.title}</span>
      <Button title={' X '} className={'todo-delete'} />
    </li>
  )
}

export default Todo