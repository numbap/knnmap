import React from 'react'
import uuid from 'uuid'

export default class MapRowForm extends React.Component {

    constructor(props){
        super(props)
        if(props.otherKey)
        {
            this.state = { 
                id: props.otherKey, 
                name: props.mapDetails.name, 
                locations: props.mapDetails.locations, 
                description: props.mapDetails.description
            }
        } else {
            this.state = { 
                id: uuid(), 
                name: '', 
                locations: '', 
                description: ''
            }
        }   
    }

    processForm = (e) => {
        e.preventDefault();
        let tmpObj ={} 
        tmpObj[this.state.id] = { 
            name: this.state.name, 
            description: this.state.description, 
            locations: this.state.locations
        }
        this.props.submitMap(tmpObj)
        this.setState(() => ({ id: uuid(), name: '', locations: '', description: ''}))
        this.render()
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }))
        this.render()
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
        this.render()
    }

    render() {
        return (
            <tr>
            <th scope="row">1</th>
            <td><input type="text" value={this.state.name} onSubmit={this.processForm} className="form-control" aria-describedby="emailHelp" placeholder="Name" onChange={this.onNameChange} /></td>
            <td><input type="text" value={this.state.description} onSubmit={this.processForm} className="form-control" aria-describedby="emailHelp" placeholder="Description" onChange={this.onDescriptionChange} /></td>
            <td></td>
            <td><button type="submit" className="btn btn-primary btn-sm" onClick={this.processForm}>Submit</button></td>
            </tr>
        );
    }
}
