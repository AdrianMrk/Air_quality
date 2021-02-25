import { Component } from "react";
import {MapContainer,MapConsumer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import getSensorList from './getSensorList'
import SensorData from './dispSensorData'

export default class Markers extends Component{
    
    state ={
        sensorList: null,
        indexLevel: null,
        date: null
    }

componentDidMount()
{
    const promisedgetSensorList = getSensorList(this.props.id);
    promisedgetSensorList
    .then(results => this.setState({sensorList: results}))
    .catch(error => console.log( error));
    this.getIndexLevel(this.props.id)
 
}

getIndexLevel = (id) =>  {
   
    fetch("http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+id)
      .then(response => {
          if (response.ok) {
              return response.json()
          } else {
              return Promise.reject(`Http error: ${response.status}`);
          }
      })
      .then((responseData) => {    

        this.setState({date: responseData.stCalcDate})
        console.log(responseData);
        if(responseData.pm25IndexLevel)
        this.setState({indexLevel: responseData.pm25IndexLevel.indexLevelName})
        else if(responseData.pm10IndexLevel)
        this.setState({indexLevel: responseData.pm10IndexLevel.indexLevelName})
        else if(responseData.no2IndexLevel)
        this.setState({indexLevel: responseData.no2IndexLevel.indexLevelName})
        else if(responseData.o3IndexLevel)
        this.setState({indexLevel: responseData.o3IndexLevel.indexLevelName})
        else if(responseData.coIndexLevel)
        this.setState({indexLevel: responseData.coIndexLevel.indexLevelName})
        else if(responseData.coIndexLevel)
        this.setState({indexLevel: responseData.coIndexLevel.indexLevelName})
    })
    };

createpop = (sensor) =>
{   

    return(
        <div key={sensor.id}>
        {sensor.id}<br/>
        {sensor.param.paramFormula} : <SensorData id={sensor.id} />    
        </div>
    )
    
}


render()
{
 //   console.log(this.state.indexLevel);
    const lat = this.props.lat;
    const lon = this.props.lon;

    var greenIcon = L.icon({
        iconUrl: 'location-pin.png',
        iconSize:[38, 38],
});
   
  //  console.log(id)
    if(this.state.sensorList && this.state.indexLevel)
    {
        return( 
            <Marker
                position={[lat,lon]}
                icon={ greenIcon }
                >
                    <Popup>
                    Aktualizacja: <br/> 
                    {this.state.date} <br/>
                    Jakość: {this.state.indexLevel}<br/>
                    {this.state.sensorList.map(this.createpop)}
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
                    Brak danych
                </Popup>
        </Marker>
    )
}
}