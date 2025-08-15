// import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting.jsx'

function App() {
  // const [count, setCount] = useState(0)
// Include support for a greeting message via children.
  return (
    <>
      <Greeting />
      <br />
      <Greeting name="John"><br /> Welcome to our website!</Greeting>
    </>
  )
}

export default App
