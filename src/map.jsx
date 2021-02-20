import React, { Component } from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



class Map extends Component {

state = {
    lat: 50.849509,
    lng: 17.462579,
    zoom: 12,
}


render() {
    const position = [this.props.lat, this.props.lon]

    var greenIcon = L.icon({
      iconUrl: 'location-pin.png',
  
      iconSize:     [38, 38], // size of the icon
   //   shadowSize:   [50, 64], // size of the shadow
    //  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   //   shadowAnchor: [4, 62],  // the same for the shadow
   //   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

    



    return (
    <MapContainer center={position} zoom={11} style={{height : '500px'}}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={ greenIcon }>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    </MapContainer>
    )
    }
}
export default Map