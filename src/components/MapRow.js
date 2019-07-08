
import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteMap, setMapRow} from '../actions/maps'

const MapRow = (props) => (
      <tr>
          <th scope="row">1</th>
          <td><Link to={'/maps/' + props.otherKey} >{props.mapDetails && props.mapDetails.name}</Link></td>
          <td>{props.mapDetails && props.mapDetails.description}</td>
          <td>{props.mapDetails && Object.keys(props.mapDetails.locations).length}</td>
          <td>
              <i style={{cursor: 'pointer'}} 
              className="far fa-trash-alt" 
              onClick={() => { props.dispatch(deleteMap(props.otherKey)) }} ></i> - 
              <i style={{cursor: 'pointer'}}  
              className="fas fa-edit"
              onClick={() => props.dispatch(setMapRow(props.otherKey)) } ></i>

          </td>
      </tr>
);

export default connect()(MapRow);

