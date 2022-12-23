import { useState } from 'react'

import './App.css'
import ListingPage from './components/ListingPage/ListingPage'
import OrderSummary from './components/OrderSummary/OrderSummary'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [page, setPage] = useState(0)

  return (
    <div className="App w-screen">
      <Navbar setPage={setPage}></Navbar>
      {page == 0 ? <ListingPage></ListingPage> : <OrderSummary setPage={() => setPage(0)}></OrderSummary>}
    </div>
  )
}

export default App
