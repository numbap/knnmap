// Load Dependencies
import React from 'react'
import uuid from 'uuid'

export default class LocationRowForm extends React.Component {
    constructor(props){
        super(props)
        if(props.otherKey)
        {
            this.state = { 
                id: props.otherKey, 
                location: props.locationDetails.location, 
                lat: props.locationDetails.lat, 
                lon: props.locationDetails.lon
            }
        } else {
            this.state = { 
                id: uuid(), 
                location: '', 
                lat: '', 
                lon: ''
            }
        }
    }

    processForm = (e) => {
        e.preventDefault();
        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(this.state.location) + '.json?access_token=pk.eyJ1IjoicGpvYmluIiwiYSI6ImNqdzkyYW04azF5azU0Ymw5d3pubWZ0ajYifQ.yfUUDFgq4poK7JyNhhOz_g&limit=1'
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            this.setState(() => ((myJson.features[0]) ? { lat: myJson.features[0].center[1], 'lon': myJson.features[0].center[0] } : { lat: 'Unknown', 'lon': 'Unknown'}));
            let tmpObj ={} 
            tmpObj= { 
                _id: this.state.id,
                location: this.state.location, 
                lat: this.state.lat, 
                lon: this.state.lon
            }
            this.props.submitLocation(tmpObj);
            this.setState(() => ({ id: null, location: '', lat: '', lon: '' }))
            this.render()
        }.bind(this));
 
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
