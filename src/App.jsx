import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './Home/Index'
import Header from './Home/Header'
import MenuBar from './Components/MenuBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index />
      <Header />
      <MenuBar />
    </>
  )
}

export default App
