import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

import Navsection from './components/navsection'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width:"100%"}}>
     <Navsection/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Footer/>
    </div>
    

 
  )
}

export default App
