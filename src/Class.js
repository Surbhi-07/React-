import React from "react";

export default class Class extends React.Component{
    constructor()
    {
        super()
    }
componentDidMount()
    {
        console.log("called life cucle");
    }
    render()
    {
        return(
            <div>
            <h1>Class component</h1>
            <h2>Hello!!</h2>
            </div>
        );
    };
};
