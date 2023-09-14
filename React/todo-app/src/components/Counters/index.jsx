const Counters = ({todos}) => {

  const total = todos.length
  //const uncheckTotal = todos.filter(todo => !todo.checked).length
  const uncheckTotal = todos.reduce((prev, todo) => prev + !todo.checked, 0)

  return (
    <div className='flow-right controls'>
      <span>Item Count: <span className="item-count">{ total }</span></span>
      <span>Unchecked Count: { uncheckTotal }</span>
    </div>
  )
}

export default Counters