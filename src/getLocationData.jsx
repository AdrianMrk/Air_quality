import * as React from "react";

export var main = function(data) {
   
    return fetch('https://nominatim.openstreetmap.org/search?format=json&limit=3&q='+data)
      .then(response => response.json())
      .then((responseData) => {
        return responseData;
      })
  };
export default main