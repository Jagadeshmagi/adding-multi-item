import React, { Component } from 'react';
import './App.css';
import IPRangeComponent from './IPRangeComponent'
import {Button} from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipRanges:[]
    }
  }

  addIpFunction(){
    let newIPRangesList = this.state.ipRanges.slice();
    let ipRange = {}
    ipRange["startIP"] = ""
    ipRange["endIP"] = ""

    newIPRangesList.push(ipRange)

    this.setState({ipRanges:newIPRangesList})

  }

  saveIPRange(id,start,end){
    let newIPRangesList = this.state.ipRanges.slice();
    let ipRange = newIPRangesList[id];
    ipRange.startIP = start
    ipRange.endIP = end
    newIPRangesList.push(ipRange)
    this.setState({ipRanges:newIPRangesList})
  }

  removeIPRange(id){
    let newIPRangesList = this.state.ipRanges.slice()
    newIPRangesList.splice(id,1)
    this.setState({ipRanges:newIPRangesList})
  }
  
  render() {
    console.log('Render', this.state.ipRanges)
    return (
      <div className="App">
        <div>
          <Button onClick={this.addIpFunction.bind(this)} href='javaScript: void(0)'>Add IP</Button>
          {
            this.state.ipRanges.map((ipRange, key) => {
              return <IPRangeComponent key={key} index={key} ipRange={ipRange} saveIPRange={this.saveIPRange.bind(this)} removeIPRange={this.removeIPRange.bind(this)} addIPRange={this.addIpFunction.bind(this)} ipRangeTotal={this.state.ipRanges.length}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
