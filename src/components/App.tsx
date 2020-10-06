import React from 'react'
import SearchBar from './SearchBar'
import Map from './Map'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <SearchBar/>
      <Map/>
    </div>
  )
}

export default App