import AddressInformation from "../../organisms/addressInformation/AddressInformation"
import Map from "../../organisms/map/Map"
import SearchBar from "../../organisms/searchBar/SearchBar"
import { useState, useEffect } from 'react'


const R01IpAddressTracker = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_ZCr63iuS0xJLtPlWX14PBRY5CVse1')
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`)
        }
        const result = await response.json()
        setData(result)
        setError(null)
      } catch (error) {
        setError(error.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  console.log(data.ip)
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error}</p>
  }



  return (
    <div>
      <SearchBar />
      <AddressInformation />
      <Map />
    </div>
  )
}

export default R01IpAddressTracker