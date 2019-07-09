import React from 'react'
// ES6
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

 
const MapBox = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicGpvYmluIiwiYSI6ImNqdzkyYW04azF5azU0Ymw5d3pubWZ0ajYifQ.yfUUDFgq4poK7JyNhhOz_g"
});
 

const NewMapBox = () => (

  <MapBox
    style="mapbox://styles/mapbox/streets-v9"
    containerStyle={{
      height: "30vh",
      width: "100vw"
    }}>
      <Layer
        type="symbol"
        id="marker"
        layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
      </Layer>
  </MapBox>

);

export default NewMapBox



