import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from './chart'
import GoogleMap from './google_map'

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humiditys = cityData.list.map(weather => weather.main.humidity)
        const { lat, lon } = cityData.city.coord
        
        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humiditys} color="black" units="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (K)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const matStateToProps = ({ weather }) => ({ weather })

export default connect(matStateToProps)(WeatherList)
