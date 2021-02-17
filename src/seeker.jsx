import * as React from "react";
import getLocationData from "./getLocationData"

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

      return (
          <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Podaj miasto
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Wyślij" />
            { loc ? console.log(loc): "Proszę wpisać miasto" }
            </form>
            
        </div>
      );
    }
  }
 