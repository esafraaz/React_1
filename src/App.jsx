import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      
      <Counter></Counter>
    </>
  )
}

export default App
