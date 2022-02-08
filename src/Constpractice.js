import React from 'react';
export default class Constpractice extends React.Component{
    constructor(){
        super();
        this.state={propss:'constructor'}
    }
    render(){
        return(
            <div>
                hello Component {this.state.propss}
            </div>
        )
    }
}