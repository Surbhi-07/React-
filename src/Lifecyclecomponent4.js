import React, { Component } from 'react'

export default class Lifecyclecomponent4 extends Component {
    constructor(){
        super()
        this.state={
            count:0
        } 
    }
    shouldComponentUpdate(){
        console.warn("method")
        return true;
    }
    render(){
        console.warn("render");
        return(
            <div>
                <h1>Should Component Update{this.state.count}</h1>
                
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update</button>
            </div>
        );
    }
}