import * as React from "react";
import Map from '../map'


export default class GetSensorLocation extends React.Component {

state = {
  maindata : null,
}


getData(lat,lon) {
   
  fetch("http://api.gios.gov.pl/pjp-api/rest/station/findAll")
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            return Promise.reject(`Http error: ${response.status}`);
        }
    })
    .then((responseData) => {      
          this.checkStations(lat,lon,responseData);
        })
  };
componentDidMount()
{
  this.getData(this.props.lat,this.props.lon)
}


checkStations(lat,lon,jsonData)
{

  var cordtable = [];

  jsonData.forEach(line => {

    if(lat-line.gegrLat>-0.22 && lat-line.gegrLat<0.22 && lon-line.gegrLon>-0.22 && lon-line.gegrLon<0.22 )
    {cordtable.push([line.gegrLat,line.gegrLon,line.id])
    }
    
  });
  this.setState({maindata:cordtable})




}

    render() {

      var citylat = this.props.lat
      var citylon = this.props.lon
      var jsonData = this.state.maindata
      
      return (
        <div>       
          {jsonData ? <Map lat={citylat} lon={citylon} data={jsonData}/>  : null}
        </div>
      );
    }

}