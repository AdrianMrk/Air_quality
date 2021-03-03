import * as React from "react";
import getLocationData from "./getLocationData"
import { ChooseLocation } from "./chooseLocation";

export default class Seeker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', currentLocation:null};
  
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

        var location = this.state.currentLocation;

        if(location)
        {
          return (
        
          <div id="mainContainer">
            <p className="headerFont">Wybierz Miejsce</p>
            <br/>
            {<ChooseLocation locations={location}/>}          
          
            <div className="backButton" onClick={() => this.setState({currentLocation:null})}>Wybierz Ponownie</div>
          </div>
          
          );
        }

        else{

      return (
        
      <div id="mainContainer">
        <div>
          <p className="headerFont">Podaj Miejsce</p> 
          <br/> 
          <form onSubmit={this.handleSubmit}>
             
            <input type="text" placeholder="Szukaj.." value={this.state.value} onChange={this.handleChange} />            
            <br/>
            <input type="submit" value="Wyślij" />
          </form> 
         </div> 
         <br/><br/><br/>
         <p className="description">
           Podając miejsce, w promieniu 25 kilometrów zostaną
           wyświetlone wszystkie istniejące i działające czujniki jakości powietrza.
          </p>  
      </div>
      );
      }
    }
  }
 