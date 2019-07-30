// Load Dependencies
import {setMaps, addMap, deleteMap, addLocation, deleteLocation} from './maps'

// Get all maps
export function fetchMaps(store) {
      fetch(`https://safe-depths-39797.herokuapp.com/maps`, {
                method: 'GET', 
                mode: 'cors', 
                headers: {
                    Accept: 'application/json'
                  }
                })
    .then((response) => response.json())
    .then(function(x){
      store.dispatch(setMaps(x.data))
      })
    .catch((e) => e)
}

// Get all location for this map ID
export function fetchLocations(store, map_id) {
      fetch(`https://safe-depths-39797.herokuapp.com/maps/${encodeURIComponent(map_id)}`, {
                method: 'GET', 
                mode: 'cors', 
                headers: {
                    Accept: 'application/json'
                  }
                })
    .then((response) => response.json())
    .then(function(x){
      store.dispatch(setMaps(x.data))
      })
    .catch((e) => e)
}

// Add a location for this map ID
export function addApiLocation(_id, body, dispatch) {
  fetch(`https://safe-depths-39797.herokuapp.com/maps/${encodeURIComponent(_id)}/?lat=${encodeURIComponent(body.lat)}&location=${encodeURIComponent(body.location)}&lon=${encodeURIComponent(body.lon)}&_id=${body._id ? encodeURIComponent(body._id) : ''}`, {
            method: 'POST', 
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                }
            })
            .then((response) => response.json())
            .then(function(x){
              console.log(_id, body, dispatch)
              dispatch(addMap(x.data))
            })
            .catch((e) => console.log(e))
}

// Add a map using the API
export function addApiMap(body, dispatch) {
  fetch(`https://safe-depths-39797.herokuapp.com/maps/?name=${encodeURIComponent(body.name)}&description=${encodeURIComponent(body.description)}&_id=${body._id ? encodeURIComponent(body._id) : ''}`, {
            method: 'POST', 
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                }
            })
            .then((response) => response.json())
            .then(function(x){
              dispatch(addMap(x.data))
            })
            .catch((e) => console.log(e))
}

// Delete a map using map ID
export function deleteApiMap(_id, dispatch) {
  fetch(`https://safe-depths-39797.herokuapp.com/maps/${encodeURIComponent(_id)}`, {
            method: 'DELETE', 
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                }
            })
            .then((response) => response.json())
            .then(function(x){
              dispatch(deleteMap(_id))
            })
            .catch((e) => console.log(e))
}

// Delete a location from a specific map
export function deleteApiLocation(map_id, location_id, dispatch) {
  fetch(`https://safe-depths-39797.herokuapp.com/maps/${encodeURIComponent(map_id)}/${encodeURIComponent(location_id)}`, {
            method: 'DELETE', 
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                }
            })
            .then((response) => response.json())
            .then(function(x){
              dispatch(deleteLocation(map_id, location_id))
            })
            .catch((e) => console.log(e))
}