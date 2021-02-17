import React, { Component } from 'react'
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';



class Map extends Component {
state = {
    lat: 50.849509,
    lng: 17.462579,
    zoom: 12,
}


render() {
    const position = [this.state.lat, this.state.lng]

    



    return (
    <MapContainer center={[51,20]} zoom={6} style={{height : '600px'}}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    </MapContainer>
    )
    }
}
export default Map