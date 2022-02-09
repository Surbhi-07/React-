 import React from 'react'

 export default class State extends React.Component{
     constructor(){
         super();
         this.state={
             name: 'surbhi gupta' , 
            email: 'surbhi@gmail.com',
            address: 'D-1 suvidhi nagar',
            count: 0  
         }
     }
     updateState(){
         this.setState(
             {
                 name: 'Rishita',
                 email: 'rishta@gmail.com',
                 count: this.state.count+2
             }
         )
     }
     render(){
         return(
             <div>
             <h1>hello state</h1>  
             <h1>{this.state.name}</h1> 
             <h1>{this.state.email}</h1> 
             <h1>{this.state.address}</h1> 
             <h1>{this.state.count}</h1>
             <button onClick={()=>{this.updateState()}}>update button!!!</button>
             </div>
         );
     }
 }