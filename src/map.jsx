import React, { Component } from 'react'
import {MapContainer,MapConsumer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getSensorData from './getSensorList'
import Markers from './dispMarkers'



export default class Map extends Component {

state = {
    lat: 50.849509,
    lng: 17.462579,
    zoom: 12,
}

componentDidMount()
{
  
 // var tablat = this.props.jsondata
 // console.log(tablat)
 console.log(this.props.lat,this.props.lon,this.props.data)
}

setMarks = (data) => {

  const lat = data[0];
  const lon = data[1];
  const id = data[2]

  var greenIcon = L.icon({
      iconUrl: 'location-pin.png',
  
      iconSize:     [38, 38], // size of the icon
   //   shadowSize:   [50, 64], // size of the shadow
    //  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   //   shadowAnchor: [4, 62],  // the same for the shadow
   //   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  console.log(data)
      return(
      <Markers key={id} lat={lat} lon={lon} id={id}/>
      )
    
}

render() {
  var tablat = []
  tablat=this.props.data
 // tablat = this.props.jsondata
  console.log(tablat)
  //  var tablat=[[50.849509,17.462579],[50.829509,17.442579],[50.869509,17.482579]]

    const position = [this.props.lat, this.props.lon]
    const position2 = [50.849509, 17.462579]
    const position3 = [50.859509, 17.472579]

    

    var greenIcon = L.icon({
      iconUrl: 'location-pin.png',
  
      iconSize:     [38, 38], // size of the icon
   //   shadowSize:   [50, 64], // size of the shadow
    //  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   //   shadowAnchor: [4, 62],  // the same for the shadow
   //   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  /*
  var markers = tablat.forEach(element => {
          
    console.log(element)
    return(
    <Marker position={element} icon={ greenIcon }>
      <Popup>
            Witam A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    
  )});*/
    

    



    return (
    <MapContainer center={position} zoom={11} style={{position: 'absolute', top:'0px', height : '100%',width:'100%',zIndex:'-2'}}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />        
         {tablat.map(this.setMarks)}
    </MapContainer>
    )
    }
}

/*
<MapConsumer>
        {(map) => {
          console.log(tablat)
          tablat.forEach(element => {
          console.log(element)
          var marker = L.marker([element[0],element[1]],{icon: greenIcon}).addTo(map)
          var promisedgetLocation = getSensorData(element[2]);
          promisedgetLocation
          .then(results => ( console.log("0000"),
          marker.bindPopup('<b>Hello world!</b><br />I am a popup.'+element[2]+results[0].param.paramName))
          )
          
        })
        return null
        }}
      </MapConsumer>

*/