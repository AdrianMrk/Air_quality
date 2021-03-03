import { Component } from "react";
import {Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import getSensorList from './getSensorList'
import SensorData from './dispSensorData'

export default class Markers extends Component{
    
    state ={
        sensorList: null,
        indexLevel: null,
        date: null,
        color: null,
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
        if(responseData.stIndexLevel.indexLevelName !== "Brak indeksu")
        this.setState({indexLevel: responseData.stIndexLevel.indexLevelName})
        else if(responseData.pm25IndexLevel)
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

        if(this.state.indexLevel === "Bardzo dobry")
        this.setState({color: "1"})
        else if(this.state.indexLevel === "Dobry")
        this.setState({color: "2"})
        else if(this.state.indexLevel === "Umiarkowany")
        this.setState({color: "3"})
        else if(this.state.indexLevel === "Dostateczny")
        this.setState({color: "4"})
        else if(this.state.indexLevel === "Zły")
        this.setState({color: "5"})
        else if(this.state.indexLevel === "Bardzo zły")
        this.setState({color: "6"})


    })
    };

createpop = (sensor) =>
{   

    return(
        <div key={sensor.id}>
        <b>{sensor.param.paramFormula}</b> : <SensorData id={sensor.id} />    
        </div>
    )
    
}


render()
{

    const lat = this.props.lat;
    const lon = this.props.lon;

    var greenIcon = L.icon({
        iconUrl: 'pins/cloud1'+this.state.color+'.png',
        iconSize:[100, 55],
        
})


   

    if(this.state.sensorList && this.state.indexLevel)
    {
        return( 
            <Marker class="clouds"
                position={[lat,lon]}
                icon={ greenIcon }
                >
                    <Popup>
                    
                    <b>Index jakości <br/>
                    powietrza: </b> {this.state.indexLevel}<br/>
                    {this.state.sensorList.map(this.createpop)}
                    <br/>
                    <b>Aktualizacja:</b> <br/> 
                    {this.state.date} <br/>
                    </Popup>
            </Marker>
        )
    }
    return(
        null
    )
}
}