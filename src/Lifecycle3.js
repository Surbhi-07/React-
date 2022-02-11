import React, { Component } from 'react'

export default class Lifecycle3 extends Component {
    componentWillUnmount(){
        console.warn("method");
        alert("Deleted");
    }
  render() {
      console.warn("render");
    return (
      <div>
          <ul>
              <li>Hello world</li>
              <li> world</li>
          </ul>
      </div>
    )
  }
}
