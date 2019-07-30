// Load Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './Dashboard'
import MapsTable from './MapsTable'
import NavBar from './NavBar'
import FooterSection from './FooterSection'
import Error404 from './Error404'
import LocationsTable from './LocationsTable'
import {connect} from 'react-redux'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

const AppBody = (props) => (
    <div>
        <BrowserRouter>
        <div>
            <NavBar/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/maps" component={MapsTable} exact={true}/>
                <Route path="/maps/:id" component={LocationsTable} exact={true}/>
                <Route component={Error404} />
            </Switch>
            <FooterSection />
        </div>
        </BrowserRouter>
    </div>
)

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(AppBody)
