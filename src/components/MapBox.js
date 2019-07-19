import React, { useState, useEffect } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";

function Map(props) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedLocation(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: parseFloat(props.locations[0].lat), lng: parseFloat(props.locations[0].lon) }}
      defaultOptions={{disableDefaultUI:true}}
    >
      {props.locations.map(loc => (
        <Marker
          key={loc._id}
          position={{
            lat: parseFloat(loc.lat),
            lng: parseFloat(loc.lon)
          }}
          onClick={() => {
            setSelectedLocation(loc);
          }}
        />
      ))}

      {selectedLocation && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedLocation(null);
          }}
          position={{
            lat: parseFloat(selectedLocation.lat),
            lng: parseFloat(selectedLocation.lon)
          }}
        >
          <div>
            <h2>{selectedLocation.location}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MapBox(props) {
  return (
    <div style={{ width: "100vw", height: "40vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCe81_T_Ajli81AW_ntQpWoUbvMLbgKGFE`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        locations={props.locations}
      />
    </div>
  );
}
