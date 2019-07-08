import React from 'react'
import MapRow from './MapRow'
import MapRowForm from './MapRowForm'
import Store from '../reducers/maps'
import {connect} from 'react-redux'
import {addMap}  from './../actions/maps'
import uuid from 'uuid'


const MapsTable = (props) => (
    <div className="container">
    <div className="row">
        <h3>AA {props.editMapRow} XX</h3>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Locations</th>
                </tr>
            </thead>
            <tbody>
            {console.log(props.maps)}
            {Object.keys(props.maps).concat(null).map((x) => {
                if(x === props.editMapRow){ 
                    return <MapRowForm 
                        key={x} 
                        otherKey={x} 
                        mapDetails={props.maps[x]} 
                        submitMap={(newMap) => props.dispatch(addMap(newMap))} 
                        />;
                } else {
                    return <MapRow 
                     key={x} 
                     otherKey={x} 
                     mapDetails={props.maps[x]}
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

const ConnectedMapsTable = connect(mapStateToProps)(MapsTable);

export default ConnectedMapsTable

