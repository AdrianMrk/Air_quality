import React, { Component } from 'react'
import {MapContainer, TileLayer,} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Markers from './dispMarkers'



export default class Map extends Component {

state = {
    lat: 50.849509,
    lng: 17.462579,
    zoom: 12,
}


setMarks = (data) => {

  const lat = data[0];
  const lon = data[1];
  const id = data[2]

      return(
      <Markers key={id} lat={lat} lon={lon} id={id}/>
      )
    
}

render() {
  var tablat = []
  tablat=this.props.data


    const position = [this.props.lat, this.props.lon]
 
    return (
    <MapContainer center={position} zoom={12}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />        
         {tablat.map(this.setMarks)}
    </MapContainer>
    )
    }
}
