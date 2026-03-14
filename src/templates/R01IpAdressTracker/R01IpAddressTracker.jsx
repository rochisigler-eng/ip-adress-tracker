import AddressInformation from "../../organisms/addressInformation/AddressInformation"
import Map from "../../organisms/map/Map"
import SearchBar from "../../organisms/searchBar/SearchBar"
import { useState, useEffect } from 'react'
import styles from './R01IpAddressTracker.module.scss'

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

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error}</p>
  }

  let information = [
    {
      name: "ip address",
      info: data?.ip
    },
    {
      name: "location",
      info: data?.location?.region
    },
    {
      name: "timezone",
      info: `UTC ${data?.location?.timezone}` 
    },
    {
      name: "isp",
      info: data?.isp
    }
  ]
  if(!data) return null

  return (
    <div className={styles.appContainer}>
      <SearchBar />
      {data && <AddressInformation
      data = {information}
      />}
      <Map />
    </div>
  )
}

export default R01IpAddressTracker