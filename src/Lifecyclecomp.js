import React, { Component } from 'react'

export default class Lifecyclecomp extends Component {
    constructor(){
        console.warn("constructor");
        super()
        this.state={
            name:null
        }
    }
    componentDidMount(){
        this.setState({name:"hello worl"})
        console.warn("componentdidmount method");
    }
  render() {
      console.warn("render");
    return (
      <div>
          <p>{this.state.name}
        
          </p>
      </div>
    )
  }
}

