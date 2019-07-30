// Load Dependencies
import React from 'react'
import LocationRow from './LocationRow'
import LocationRowForm from './LocationRowForm'
import MapBox from './MapBox'
import {connect} from 'react-redux'
import {addApiLocation}  from '../actions/apiCalls'
import {Link} from 'react-router-dom'

const LocationsTable = (props) => {
    return (
        <div className="container">
        <div className="row">
            <h3><Link to="../maps">{props.maps[0] && props.maps.filter(x => x._id == props.match.params.id)[0].name}</Link></h3>
            <MapBox locations={props.maps[0] && props.maps.filter(x => x._id == props.match.params.id)[0]} />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Location</th>
                        <th scope="col">Lat</th>
                        <th scope="col">Lon</th>
                    </tr>
                </thead>
                <tbody>
    
                {props.maps.length && props.maps.filter(x => x._id == props.match.params.id)[0].locations.concat({_id:null}).map((x) => {
    
                    if(x._id === props.editLocationRow){ 
                        return <LocationRowForm 
                        key={x._id}
                        mapId={props.match.params.id} 
                        otherKey={x._id} 
                        locationDetails={x} 
                        submitLocation={(newLocation) => addApiLocation(props.match.params.id, newLocation, props.dispatch)} 
                        />;
                    } else {
                        return <LocationRow 
                        key={x._id} 
                        mapId={props.match.params.id}
                        otherKey={x._id} 
                        locationDetails={x}
                        />;
                    }
                    
                })}
                </tbody>
            </table>
        </div>
        </div>
    )    
}


const mapStateToProps = (state) => {
    return state.maps
}

const ConnectedLocationsTable = connect(mapStateToProps)(LocationsTable);

export default ConnectedLocationsTable