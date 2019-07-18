// Load Dependencies
import React, {Component} from 'react' 
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

const MapBox = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicGpvYmluIiwiYSI6ImNqdzkyYW04azF5azU0Ymw5d3pubWZ0ajYifQ.yfUUDFgq4poK7JyNhhOz_g"
});

const NewMapBox = () => (

  <MapBox
    id="thi"
    style="mapbox://styles/mapbox/streets-v9"
    containerStyle={{
      height: "30vh",
      width: "100vw"
    }}

    latitude={-0.481747846041145} longitude={51.3233379650232}
    >
  </MapBox>

);

export default NewMapBox
