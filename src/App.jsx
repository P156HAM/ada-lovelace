import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Img from './component/Img.jsx'
import About from './component/About.jsx'

const name = "Ada Lovelace"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>{name}</h1>
      <div>
        <Img/>
        <About/>
      </div>
    </div>
  )
}

export default App
