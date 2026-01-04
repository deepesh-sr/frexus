import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Section2 from './components/Section2'
import Section3 from './components/Section3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Hero/>
    <Section2/>
    <Section3/>
    </>
  )
}

export default App
