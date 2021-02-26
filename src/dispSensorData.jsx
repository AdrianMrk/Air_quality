import { Component } from "react";

export default class SensorData extends Component{

state={
    data: null
}


componentDidMount()
{
this.getSensorData(this.props.id)
}


getSensorData = (id) =>  {
   
        fetch("http://api.gios.gov.pl/pjp-api/rest/data/getData/"+id)
          .then(response => {
              if (response.ok) {
                  return response.json()
              } else {
                  return Promise.reject(`Http error: ${response.status}`);
              }
          })
          .then((responseData) => {  
            if(responseData.values[0])  
            {if(responseData.values[0].value!=null)
            {this.setState({data: responseData.values[0].value.toFixed(2)})}
            else
            {this.setState({data: responseData.values[3].value})}}
        })
};

render(){

    var data = this.state.data
    return( data ? data : "Brak danych" )
}
}