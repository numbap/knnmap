import React from 'react'
import NavBar from './components/NavBar'
import MainBlock from './components/MainBlock'
import AddressTable from './components/AddressTable'

export default class KnnApp extends React.Component {
    constructor(props) {
      super(props);
      this.changeTitle = this.changeTitle.bind(this)
      this.state = {
          pageheader: "KNN Map App",
          title: "This is a dynamic page title"
      }
    }

    changeTitle(){
        this.setState((prevState) => {
            return { title: 'ddddd' }
        });
    }

    render(){
        return(
            <div>
            <NavBar pageHeader={this.state.pageheader} />
            <MainBlock title={this.state.title}/>
            <AddressTable />
            <br/><br/><br/><br/><button onClick={this.changeTitle} id="dddd">Submit</button>

            </div>
        );
    }
    
  }