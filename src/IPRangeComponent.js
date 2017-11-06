import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-bootstrap'

class IPRangeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startIP : '',
      endIP :'',
      ipRangeTotal:-1
    }
  }

  componentDidMount(){
    this.setState({
      startIP:this.props.ipRange.startIP,
      endIP:this.props.ipRange.endIP,
      ipRangeTotal:this.props.ipRangeTotal
    })                   
  }

  componentWillReceiveProps(nextProps,nextState){

    this.setState({
      startIP:nextProps.ipRange.startIP,
      endIP:nextProps.ipRange.endIP,
      ipRangeTotal:this.props.ipRangeTotal
    })
  }

  saveFunction(id,e){
    this.props.saveIPRange(id,this.state.startIP,this.state.endIP)
    this.props.addIPRange();
  }

  removeFunction(id,e){
    this.props.removeIPRange(id);
  }
  validateStartIp(e){
    this.setState({startIP:e.target.value})
  }

  validateEndIp(e){
    this.setState({endIP:e.target.value})
  } 

  render() {
    return (
      <div className="App">
        <div style={{display:'flex'}}>
          <div>
            <input id="startIP" value={this.state.startIP} type="text"  placeholder="Start Ip" onChange={this.validateStartIp.bind(this)}/>
          </div>
          <div>
            <input id="endIP" value={this.state.endIP} type="text"  placeholder="End Ip" onChange={this.validateEndIp.bind(this)}/>
          </div>
          <div onClick={this.removeFunction.bind(this,this.props.index)}>X</div>
        </div>
        <div>
          {(this.state.startIP !== '' && this.state.endIP !== ''&&((this.props.ipRangeTotal-1)===this.props.index))?
            <Button onClick={this.saveFunction.bind(this,this.props.index)} href='javaScript: void(0)'>Add IP</Button>
            :''
          }
        </div>    
      </div>
    );
  }
}

export default IPRangeComponent;
