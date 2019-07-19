// Load Dependencies
import React from 'react'
import {connect} from 'react-redux'
import {setLocationRow} from '../actions/maps'
import {deleteApiLocation} from '../actions/apiCalls'

// Row for a location table
const LocationRow = (props) => (
      <tr>
        <th scope="row">1</th>
        <td>{props.locationDetails.location}</td>
        <td>{props.locationDetails.lat}</td>
        <td>{props.locationDetails.lon}</td>
        <td>
        {props.locationDetails._id ?(<div><i style={{cursor: 'pointer'}} 
        className="far fa-trash-alt" 
        onClick={() => { deleteApiLocation(props.mapId, props.locationDetails._id, props.dispatch) }} ></i> - 
        <i style={{cursor: 'pointer'}}  
        className="fas fa-edit"
        onClick={() => props.dispatch(setLocationRow(props.locationDetails._id, props.mapId)) } ></i></div>) :
        
        (<div><i style={{cursor: 'pointer'}}  
        className="far fa-plus-square"
        onClick={() => 
          props.dispatch(setLocationRow(props.locationDetails._id, props.mapId)) } ></i></div>) 
        }  
        </td>
      </tr>
);

export default connect()(LocationRow);




