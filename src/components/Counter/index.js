import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div>
      <p>Counter: {count}</p>
      <input onChange={event => setName(event.target.value)} />
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <p>
        {name} has clicked {count} times!....
      </p>
    </div>
  )
}

export default Counter
