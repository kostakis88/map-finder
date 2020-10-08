import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Map from './Map'
import axios from 'axios'

const App: React.FC = (): JSX.Element => {

  const [coords, setCoords] = useState<Array<string>>([])

  const handleAddedAddress = (address: string) => {
    axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
      .then((response) => {
        console.log('coords ', response.data[0].lat, response.data[0].lon)
        setCoords([response.data[0].lat, response.data[0].lon])
      })
  }

  return (
    <div className="app">
      <SearchBar onAddedAddress={handleAddedAddress}/>
      <b>{coords}</b>
      <Map/>
    </div>
  )
}

export default App