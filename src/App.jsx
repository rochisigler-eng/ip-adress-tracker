import { useState } from 'react'
import R01IpAddressTracker from './templates/R01IpAdressTracker/R01IpAddressTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <R01IpAddressTracker />
    </>
  )
}

export default App
