export var main = function(data) {
   
    fetch('http://api.gios.gov.pl/pjp-api/rest/station/findAll')
      .then(response => response.json())
      .then((responseData) => {
        responseData.map(second)
      })
  };
export default main

var second = (data) => {

  const stationName = data.stationName;
  const gegrLat = data.gegrLat;
  const gegrLon = data.gegrLon;
  
  console.log(stationName+" | "+gegrLat+gegrLon)
};

var thrt = function(data) {

  return (console.log(data) + <br/>)
};