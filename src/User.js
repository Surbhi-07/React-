import logo from './logo.svg';
import React from 'react';
import './App.css';
import Lifecyclecomponent5 from './Lifecyclecomponent5';

class User extends React.Component {
  constructor()
  {
    super();
    this.state={
      volume:0
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <p>Hello!! {this.state.volume}</p> 
      <Lifecyclecomponent5 count={this.state.volume} />
      <button onClick={()=>{this.setState({count:this.state.volume+1})}}> increment</button>
      </header>
    </div>
  );
  }
}

export default User;
