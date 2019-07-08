import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/Dashboard'
import MapsTable from './components/MapsTable'
import MainBlock from './components/MainBlock'
import NavBar from './components/NavBar'
import {Provider} from 'react-redux'
import FooterSection from './components/FooterSection'
import Error404 from './components/Error404'
import LocationsTable from './components/LocationsTable'
import Store from './reducers/maps'
import configureStore from './store/configureStore'
import {setMaps} from './actions/maps'

let maps = {

    '1s234354': {
        name: 'Lorem Ipsum',
        description: 'This is for Pizza Restaurants',
        locations: {'423q4323':{location: 'street name', lng: '33.222', lat: '32323'}, '545445e54': {location: 'Another strtee', lng: '23.222', lat: '3233'} }
    },
    '4664d5456': {
        name: 'Dolor Ameit',
        description: 'I like to map random houses',
        locations: {'656tt45':{location: 'Rite Rite Rite', lng: '22.222', lat: '222'}, '65356tt45':{location: 'Lorem ipsum', lng: '44.4444', lat: '44'}, '453fdfd656tt45':{location: 'dfkjsdflkdfsjdfs ipsum', lng: '777.7', lat: '9999'}}
    },
    '86767g655654': {
        name: 'Rangu Rorem',
        description: 'My taxi drivees live here',
        locations: {'v6vc56grttt':{location: 'Lorem ipsum', lng: '88.222', lat: '777'}}
    },
    '74435h654523': {
        name: 'Ester Nulla',
        description: 'Boogie Doodie Weoo Dopp',
        locations: {}
    },
    'ds294858j74394': {
        name: 'Dapibuys Nouree',
        description: 'The game was rigged all along',
        locations: {'x6v56tb':{location: 'Goo Groo Gree', lng: '83.3333', lat: '00000'}, 'mbn65nt5':{location: 'Lorem ipsum', lng: '88.222', lat: '999'}, 'nmbbvftreg':{location: 'Moo Moo Meee', lng: '85.555', lat: '888'}, 'bgfevcx45665':{location: 'Lorem ipsum', lng: '88.222', lat: '777'}, '6fdfd56tt45': {location: 'Lorem ipsum', lng: '88.222', lat: '777'}}
    }
}




const store = configureStore();
store.dispatch(setMaps(maps));
var state = store.getState();
console.log(state)


// import KnnApp from './components/AddressTable'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'


const routes = (

    <Provider store={store} >

    <BrowserRouter>
    <div>
           <NavBar/>
               <MainBlock />
               <Switch>
                   <Route path="/" component={Dashboard} exact={true}/>
                   <Route path="/maps" component={MapsTable} exact={true}/>
                   <Route path="/maps/:id" component={LocationsTable} />
                   <Route component={Error404} />
               </Switch>
               <FooterSection />
    
    </div>
    </BrowserRouter>


    </Provider>

)


// babel reactComponents.js --out-file=public/app.js --presets=env,react
  ReactDOM.render(routes, document.getElementById('app'));





// for(var key in x){console.log(key, x[key])}
