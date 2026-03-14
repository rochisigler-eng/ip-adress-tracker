import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (

    <MapContainer
      center={[-34.6037, -58.3816]}
      zoom={13}
      style={{ height: "50vh", width: "100%", position: "absolute", bottom: 0 }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-34.6037, -58.3816]} >
        <Popup>
          Buenos Aires
        </Popup>
      </Marker>
    </MapContainer>

  )
}

export default Map