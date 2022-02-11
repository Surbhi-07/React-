import React, { Component } from 'react'

export default class Lifecyclecomp2 extends Component {
    constructor(){
        console.warn("constructor");
        super()
        this.state={
            active:null,
            passive:null
        }
    }
    componentDidUpdate(){
        console.warn("method");
        if(this.state.passive==null){
        this.setState({passive:"heelo@gmail.com"})}
    }
  render() {
      console.warn("render");
    return (
      <div>
          <p>{this.state.active} {this.state.passive}</p>
          <button onClick={()=> {this.setState({active:"Heello" })}}>activate</button>
      </div>
    )
  }
}
