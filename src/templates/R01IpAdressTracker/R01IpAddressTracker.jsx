import AddressInformation from "../../organisms/addressInformation/AddressInformation"
import Map from "../../organisms/map/Map"
import SearchBar from "../../organisms/searchBar/SearchBar"

const R01IpAddressTracker = () => {
  return (
    <div>
        <SearchBar />
        <AddressInformation />
        <Map />
    </div>
  )
}

export default R01IpAddressTracker