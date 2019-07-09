import React from 'react'
import Jumbotron from './Jumbotron'
// import GMap from './GMap'

export default class MainBlock extends React.Component {

    render() {
        return(
            <main role="main">
                <Jumbotron title='Map App' />
            </main>
        );
    }
}