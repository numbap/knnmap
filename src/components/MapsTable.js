// Load Dependencies
import React from 'react'
import MapRow from './MapRow'
import MapRowForm from './MapRowForm'
import {connect} from 'react-redux'
import {addApiMap}  from './../actions/apiCalls'

const MapsTable = (props) => {

    return (
        <div className="container">
        <div className="row">
            <h3>Maps</h3>
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
                {                   
                    props.maps.length ? 

                    props.maps.concat({_id:null}).map((x) => {
                    if(x._id === props.editMapRow){ 
                        return <MapRowForm 
                        key={x._id} 
                        otherKey={x._id} 
                        mapDetails={x} 
                        submitMap={(newMap) => addApiMap(newMap, props.dispatch)} 
                        />;
                    } else {
                        return <MapRow 
                        key={x._id} 
                        otherKey={x._id} 
                        mapDetails={x}
                        />;
                    }  
                })
                :
                null
            
            }
    
                </tbody>
            </table>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.maps
}

const ConnectedMapsTable = connect(mapStateToProps)(MapsTable);

export default ConnectedMapsTable
