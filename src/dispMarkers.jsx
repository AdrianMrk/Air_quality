import { Component } from "react";
import {MapContainer,MapConsumer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import getSensorData from './getSensorData'

export default class Markers extends Component{
    
    state ={
        sensorData: null
    }

componentDidMount()
{
    const promisedgetLocation = getSensorData(this.props.id);
    promisedgetLocation
    .then(results => this.setState({sensorData: results}))
    .catch(error => console.log( error));
}

createpop = (sensorData) =>
{

    return(
        <p>
        {sensorData.id}<br/>
        {sensorData.param.paramName}-{sensorData.param.paramFormula}
        </p>
    )
}


render()
{

    const lat = this.props.lat;
    const lon = this.props.lon;

    var greenIcon = L.icon({
        iconUrl: 'location-pin.png',
    
        iconSize:     [38, 38], // size of the icon
     //   shadowSize:   [50, 64], // size of the shadow
      //  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
     //   shadowAnchor: [4, 62],  // the same for the shadow
     //   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
   
  //  console.log(id)
    if(!this.state.sensorData)
    {
    return(
        <Marker
            position={[lat,lon]}
            icon={ greenIcon }
            >
                <Popup>
                    Brak danych
                </Popup>
        </Marker>
    )
    }
    return(
        <Marker
            position={[lat,lon]}
            icon={ greenIcon }
            >
                <Popup>
                Pozycja: {lat}-{lon} <br/>
                {this.state.sensorData.map(this.createpop)}
                </Popup>
        </Marker>
    )

}

}