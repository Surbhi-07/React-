import React from 'react'
import Proptypes from 'prop-types'
export default class Propsvalidation extends React.Component{
    render(){
        return(
            <div>
                <h1>Boolean{this.props.propBool ? "true" : "false"}</h1>
            </div>
        )
    }
}
Propsvalidation.propTypes={
    propBool:Proptypes.bool.isRequired
}
Propsvalidation.defaultProp ={
    propBool:false,
}