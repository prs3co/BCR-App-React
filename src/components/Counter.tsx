import { useState } from 'react'

interface CounterProps {
  startCount: number
}

export default function Counter({ startCount } : Readonly<CounterProps>) {
  const [count, setCount] = useState(startCount)

  function incrementHandler() {
    setCount((count) => count + 1)
  }

  return (
    <div>
      <button onClick={incrementHandler}>
        count is {count}
      </button>
    </div>
  )
}
