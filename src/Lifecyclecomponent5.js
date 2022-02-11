import React, { Component } from 'react'

export default class Lifecyclecomponent5 extends Component {
    constructor(){
        super();
        this.state={
            counter:0
          }
    }
    static getDerivedStateFromProps(props,state){
      console.warn("hooks",props , state)
      return 0;
    }
  render() {
    console.warn("render")
    return (
      <div>Lifecyclecomponent5</div>
    )
  }
}
