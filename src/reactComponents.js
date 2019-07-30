// Load Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {setMaps} from './actions/maps'
import {fetchMaps} from './actions/apiCalls'
import AppBody from './components/AppBody'

const store = configureStore();
store.dispatch(setMaps());
fetchMaps(store)

const routes = (
    <Provider store={store} >
        <AppBody />
    </Provider>
)

ReactDOM.render(routes, document.getElementById('app'));
