import React from 'react'

import SearchBar from './components/search_bar'
import WeatherList from './components/weather_list'

const App = () => {
    return (
        <div className="container">
            <SearchBar />
            <WeatherList />
        </div>
    )
}

export default App
