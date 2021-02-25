
export var main = function(data) {
   
    return fetch('http://api.gios.gov.pl/pjp-api/rest/station/sensors/'+data)
      .then(response => response.json())
      .then((responseData) => {
          console.log(responseData)
        return responseData;
      })
  };
export default main