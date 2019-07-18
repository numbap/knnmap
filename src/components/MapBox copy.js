// Load Dependencies
import React, {Component} from 'react' 
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
 
const MapBox = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicGpvYmluIiwiYSI6ImNqdzkyYW04azF5azU0Ymw5d3pubWZ0ajYifQ.yfUUDFgq4poK7JyNhhOz_g"
});

const NewMapBox = () => (

  <MapBox
    style="mapbox://styles/mapbox/streets-v9"
    containerStyle={{
      height: "30vh",
      width: "100vw"
    }}

    latitude={-0.481747846041145} longitude={51.3233379650232}
    >
      <Marker LngLatLike={{lng: 51.3233379650232, lat: -0.481747846041145}} latitude={-0.481747846041145} longitude={51.3233379650232} offsetLeft={-20} offsetTop={-10}>
        <div>You are here</div>
      </Marker>
      <Layer
        type="symbol"
        id="marker"
        layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
      </Layer>
  </MapBox>

);

export default NewMapBox