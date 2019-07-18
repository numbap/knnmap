// Load Dependencies
import React from 'react'
import { Link} from 'react-router-dom'

// Default error page
export default class Error404 extends React.Component {
    lookForKey = (e) => {
        console.log(e)
    }
        render() {
            return (
            <div className="container">
            <div className="row">
                <div><h1>Error 404 Page Not Found</h1></div>
                <div><p>The page you've requested could not be found. <Link to="/">Click Here To Return Home</Link></p></div>
            </div>
            </div>
            );
      }
 }





