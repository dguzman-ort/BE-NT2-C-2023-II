const Counters = ({todos}) => {
  return (
    <div className='flow-right controls'>
      <span>Item Count: <span className="item-count">{ todos.length }</span></span>
      <span>Unchecked Count: 4</span>
    </div>
  )
}

export default Counters