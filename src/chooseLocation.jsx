import * as React from "react";


export class ChooseLocation extends React.Component {

  
  chooseLocation = (locations) => {

    const displayName = locations.display_name;
    const lat = locations.lat;
    const lon = locations.lon;
    
    return <div>{displayName+" | "+lat+" "+lon}</div>
  };

  render() {
    return (
      <div>  
        {this.props.locations.map(this.chooseLocation)}
      </div>
    );
  }
}