import React from 'react'
import uuid from 'uuid'
import {connect} from 'react-redux'
import {addMap, setMapRow} from '../actions/maps'

export default class LocationRowForm extends React.Component {

    constructor(props){
        super(props)
        if(props.otherKey)
        {
            this.state = { 
                id: props.otherKey, 
                location: props.locationDetails.location, 
                lat: props.locationDetails.lat, 
                lng: props.locationDetails.lng
            }

        } else {
            this.state = { 
                id: uuid(), 
                location: '', 
                lat: '', 
                lng: ''
            }
        }
        
    }

    processForm = (e) => {
        e.preventDefault();
        let tmpObj ={} 
        tmpObj[this.state.id] = { 
            location: this.state.location, 
            lat: this.state.lat, 
            lng: this.state.lng
        }
        this.props.submitLocation(tmpObj)
        this.render()
    }


    onLocationChange = (e) => {
        const location = e.target.value;
        this.setState(() => ({ location }))
        this.render()
    }
    
    render() {
        return (
            <tr>
            <th scope="row">1</th>
            <td><input type="text" value={this.state.location} onSubmit={this.processForm} className="form-control" aria-describedby="emailHelp" placeholder="Location" onChange={this.onLocationChange} /></td>
            <td></td>
            <td></td>
            <td><button type="submit" className="btn btn-primary btn-sm" onClick={this.processForm}>Submit</button></td>
            </tr>
        );
    }
}
