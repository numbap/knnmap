import React from 'react'
import {NavLink} from 'react-router-dom'

export default class NavBar extends React.Component {

    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-static-top">
            <a className="navbar-brand" href="#">{this.props.pageHeader}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        <NavLink to="/" className="nav-link" activeClassName="text-uppercase font-weight-bold" exact={true}>Home</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/maps" className="nav-link" activeClassName="text-uppercase font-weight-bold">maps</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/sdsdsdsds" className="nav-link" activeClassName="text-uppercase font-weight-bold">404</NavLink>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Logout <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
    
            </div>
            </nav>
        );
    }
}