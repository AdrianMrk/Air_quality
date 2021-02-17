import * as React from "react";
import Seeker from './seeker'
import Map from './map'

function App() {
 
  return (
    <div className="App">
      <div  id="backgroundImage">
        <div id="header">
        Tu będzie formularz
         <Seeker/>
         <Map/>
        </div>
      </div>
      
    </div>
  ); 
}

export default App;
