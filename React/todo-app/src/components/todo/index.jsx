import Button from "../Button"

const Todo = ({ todo, onDelete, onChange }) => {
  return (
    <li className='todo-container'>
      <input type={'checkbox'} className={'todo-checkbox'} checked={todo.checked} onChange={() => onChange(todo.id)} />
      <span className={'title'}>{todo.title}</span>
      <Button title={' X '} className={'todo-delete'} callback={() => onDelete(todo.id)} />
    </li>
  )
}

export default Todo