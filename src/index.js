import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Constpractice from './Constpractice';
//import Home from './Home';
//import Class from './Class';
//import Event from './Event';
//import Functionalprops from './Functionalprops';
//import Classprops from './Classprops';
//import State from './State'
//import Lifecyclecomp from './Lifecyclecomp';
//import Lifecyclecomp2 from './Lifecyclecomp2';
//import Propsvalidation from './Propsvalidation'
//import Lifecyclecomponent4 from './Lifecyclecomponent4'
//import User from './User';
//import Loginform from './Loginform';
import Registrationform  from './Registrationform';

 import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

 <Registrationform />
 

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
