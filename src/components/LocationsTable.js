import React from 'react'
import LocationRow from './LocationRow'
import LocationRowForm from './LocationRowForm'
import Store from '../reducers/maps'
import {connect} from 'react-redux'
import {addLocation}  from '../actions/maps'
import uuid from 'uuid'
import {Link} from 'react-router-dom'

// Put a link to the main map. 
// This already exists in the menu. 
// The routing is all fucked up. 

const LocationsTable = (props) => (

    <div className="container">
    <div className="row">
        <h3>AA {props.editLocationRow} XX</h3>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Location</th>
                    <th scope="col">Lat</th>
                    <th scope="col">Lng</th>
                </tr>
            </thead>
            <tbody>

            {Object.keys(props.maps[props.match.params.id].locations).concat(null).map((x) => {
                if(x === props.editLocationRow){ 
                    return <LocationRowForm 
                    key={x}
                    mapId={props.match.params.id} 
                    otherKey={x} 
                    locationDetails={x ? props.maps[props.match.params.id].locations[x] : null} 
                    submitLocation={(newLocation) => props.dispatch(addLocation(props.match.params.id, newLocation))} 
                    />;
                } else {
                    return <LocationRow 
                    key={x} 
                    mapId={props.match.params.id}
                    otherKey={x} 
                    locationDetails={x ? props.maps[props.match.params.id].locations[x] : null}
                    />;
                }


                 
            })}

            </tbody>
        </table>
    </div>
    </div>
)

const mapStateToProps = (state) => {
    return state.maps
}

const ConnectedLocationsTable = connect(mapStateToProps)(LocationsTable);

export default ConnectedLocationsTable




