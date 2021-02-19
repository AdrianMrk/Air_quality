import * as React from "react";
import Map from './map'


export default class GetSensorLocation extends React.Component {




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
    //      console.log("sam fetch"+ responseData)
        })
  /*
    fetch('http://api.gios.gov.pl/pjp-api/rest/station/findAll')
      .then(response => response.json())
      .then((responseData) => {
        
    //    this.fourth(lat,lon,responseData);
        console.log("sam fetch"+ responseData)
      })*/
  };
componentDidMount()
{
  this.getData(this.props.lat,this.props.lon)
}


checkStations(lat,lon,jsonData)
{
  console.log(lat+" | "+lon)
  console.log(jsonData[0].stationName+","+jsonData[0].gegrLat+","+jsonData[0].gegrLon)

  jsonData.forEach(line => {

    if(lat-line.gegrLat>-0.15 && lat-line.gegrLat<0.15 && lon-line.gegrLon>-0.15 && lon-line.gegrLon<0.15 )
    console.log(line.stationName+"|"+line.gegrLat+line.gegrLon);
    
  });



}

    render() {

      


      return (
        <div>  
          {console.log(this.props.lat+" | "+this.props.lon)}
          <Map/>
        </div>
      );
    }

}