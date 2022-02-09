import React from 'react'

export default class Classprops extends React.Component{
    render(){

    
    return(
        <div>
        <h1>{this.props.data.fname} </h1>
        <h1>{this.props.info.lname} </h1>
        </div>
    )
    }
}