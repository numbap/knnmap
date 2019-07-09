import React from 'react'
import { Link} from 'react-router-dom'

export default class AddressTable extends React.Component {

    addAddress = (newAddress) => {
        this.setState((prevState) => {
            return { 
                locations: prevState.locations.concat({ address:'This is a new address', latitude:0, longitude:0})
            }
        })
    }

    lookForKey = (e) => {
        console.log(e)
    }

        render() {
            return (
                <div className="container">
                <div className="row">
            <h1>Error 404 Page Not Found</h1>
            <p>Suspendisse sollicitudin, felis eget vestibulum semper, eros neque accumsan lectus, ut maximus justo risus eu felis. Nullam sagittis posuere nisi, et bibendum ex consectetur ut. Suspendisse vel luctus augue, a congue nulla. Donec congue elit et erat varius pretium. Aliquam erat volutpat. Vivamus porttitor purus ipsum, a convallis nunc ornare sed. Pellentesque id rutrum metus. Donec et nunc ac augue fringilla feugiat eu vitae nisi. In viverra ligula nunc, vitae ornare sapien finibus hendrerit. Donec nec dui vestibulum, mattis tellus vel, aliquam purus. Cras congue ac est sed tempus.</p>
            <p><Link to="/">Click Here To Return Home</Link></p>

            </div>
            </div>
    
            );
      }

 }





