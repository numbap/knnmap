
// Load Dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteMap, setMapRow} from '../actions/maps'
import {deleteApiMap} from '../actions/apiCalls'

const MapRow = (props) => (
      <tr>
          <th scope="row">1</th>
          <td><Link to={'/maps/' + props.mapDetails._id} >{props.mapDetails.name}</Link></td>
          <td>{props.mapDetails.description}</td>
          <td>{props.mapDetails[0] && props.mapDetails.locations.length}</td>
          <td>
          {props.otherKey ? (<div><i style={{cursor: 'pointer'}} 
          className="far fa-trash-alt" 
          onClick={() => { deleteApiMap( props.mapDetails._id, props.dispatch)}} ></i> - 
          <i style={{cursor: 'pointer'}}  
          className="fas fa-edit"
          onClick={() => props.dispatch(setMapRow(props.mapDetails._id)) } ></i></div>) : 
          (<div><i style={{cursor: 'pointer'}}  
          className="far fa-plus-square"
          onClick={() => props.dispatch(setMapRow(props.mapDetails._id)) } ></i></div>)}
          </td>
      </tr>
);

export default connect()(MapRow);