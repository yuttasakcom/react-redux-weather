import React, { Component } from 'react'
import GoogleMapsLoader from 'google-maps'

GoogleMapsLoader.KEY = 'AIzaSyCINwOAUdL224lj41X5VmJxT2lvjBkJYro'
GoogleMapsLoader.VERSION = '3.33'

class GoogleMap extends Component {
    componentDidMount() {
        GoogleMapsLoader.load(google => new google.maps.Map(this.refs.map, {
            center: {lat: this.props.lat, lng: this.props.lon},
            zoom: 12
        }))
    }

    render() {
        return <div className="map" ref="map" />
    }
}

export default GoogleMap
