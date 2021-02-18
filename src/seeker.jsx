import * as React from "react";
import getLocationData from "./getLocationData"
import { ChooseLocation } from "./chooseLocation";

export default class Seeker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',currentLocation:null};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        const promisedgetLocation = getLocationData(this.state.value);
        promisedgetLocation
        .then(results => this.setState({currentLocation: results}))
        .catch(error => console.log( error));
     
      event.preventDefault();
    }
  
    render() {

        var loc = this.state.currentLocation;

        if(loc)
        {
          return (
          <div>
            Witam
            {console.log(loc)}
            {<ChooseLocation locations={loc}/>}         
        
          </div>
          );
        }

        else{

      return (
          <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Podaj miasto
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Wyślij" />
            </form>
            
        </div>
      );
      }
    }
  }
 