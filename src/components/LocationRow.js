
import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteLocation, setLocationRow} from '../actions/maps'

const LocationRow = (props) => (
      <tr>
        <th scope="row">1</th>
        <td>{props.locationDetails && props.locationDetails.location}</td>
        <td>{props.locationDetails && props.locationDetails.lat}</td>
        <td>{props.locationDetails && props.locationDetails.lng}</td>
        <td>
            <i style={{cursor: 'pointer'}} 
            className="far fa-trash-alt" 
            onClick={() => { props.dispatch(deleteLocation(props.otherKey, props.mapId)) }} ></i> - 
            <i style={{cursor: 'pointer'}}  
            className="fas fa-edit"
            onClick={() => props.dispatch(setLocationRow(props.otherKey, props.mapId)) } ></i>
        
        </td>
      </tr>
);

export default connect()(LocationRow);




