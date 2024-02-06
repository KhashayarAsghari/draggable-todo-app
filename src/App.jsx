import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Kanbanboard from './components/Kanbanboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Kanbanboard />
    </>
  )
}

export default App
