import * as React from "react";
import GetSensorLocation from "./getSensorLocation"


export class ChooseLocation extends React.Component {

  state = {
    currentlat: null,
    currentlon: null,
  };

  chooseLocation = (locations) => {

    const key = locations.place_id;
    const displayName = locations.display_name;
    const lat = locations.lat;
    const lon = locations.lon;
    
    return <div key={key} style={{backgroundColor:'white',margin:'14px'}} onClick={() => this.setcords(displayName,lat,lon)}> {displayName+" | "+lat+" | "+lon}</div>
  };

  setcords(name,lat,lon)
  {
    console.log(name+' | '+lat+' | '+lon)
    this.setState({currentlat:lat,currentlon:lon})
  }
  
  render() {

    var lat = this.state.currentlat;
    var lon = this.state.currentlon;

    return (
      <div>  
        {lat ? <GetSensorLocation lon={lon} lat={lat} /> : this.props.locations.map(this.chooseLocation)}
      </div>
    );
  }
}