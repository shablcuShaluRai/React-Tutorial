import React, { Component } from 'react';

import './App.css';

//Sometimes we want to update the component manually. we can achieve this by using forceUpdate() method.
class App extends Component {
  //The bind() method creates a new function that, when called, has its this keyword set to the provided value,
  // with a given sequence of arguments preceding any provided when the new function is called.
forceUpdateHandler = this.forceUpdateHandler.bind(this);


forceUpdateHandler(){
  // By default, when our component's state or props change, our component will re-render.
  // If our render() method depends on some other data, we can tell React that the component needs re-rendering by calling forceUpdate().
  this.forceUpdate();// it depends on hte Math.random().
}

render(){
  return(
    <div>
    <button onClick = {this.forceUpdateHandler}>Random Number</button>
     <h4>Random number: {Math.random()}</h4>
    </div>
  );
   }
}

export default App;
