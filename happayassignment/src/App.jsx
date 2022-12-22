import { useState } from 'react'

import './App.css'
import ListingPage from './components/ListingPage/ListingPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <ListingPage></ListingPage>
    </div>
  )
}

export default App
