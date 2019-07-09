import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/Dashboard'
import MapsTable from './components/MapsTable'
import NavBar from './components/NavBar'
import {Provider} from 'react-redux'
import FooterSection from './components/FooterSection'
import Error404 from './components/Error404'
import LocationsTable from './components/LocationsTable'
import configureStore from './store/configureStore'
import {setMaps} from './actions/maps'

const store = configureStore();
store.dispatch(setMaps());
var state = store.getState();
console.log(state)

import {BrowserRouter, Route, Switch} from 'react-router-dom'

const routes = (
    <Provider store={store} >
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
    </Provider>
)

ReactDOM.render(routes, document.getElementById('app'));
