import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count'
import Users from './users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Users></Users>
      <Counter></Counter>
    </>
  )
}

export default App
