import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Section2 from './components/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Hero/>
    <Section2/>
    </>
  )
}

export default App
