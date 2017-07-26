import React, { Component } from 'react';

import './App.css';


class App extends Component {
  // For data that is going to change, we have to use state.
state = {
  data:[]
}
setStateHandler = this.setStateHandler.bind(this);
// it is function, which called on  onClick event.
setStateHandler(){
  var item = "Shalu..."
  var marray = this.state.data;
  //The push() method adds new items to the end of an array, and returns the new length.
  //it adds the data in  array .
  marray.push(item);
  //it updates the state of data.
  //here, data contains the new length of the marray
  this.setState({data:marray })
}

render(){
  return(
    <div>
    <button onClick = {this.setStateHandler}>SET STATE</button>
    <h4>{this.state.data}</h4>
    </div>
  );
   }
}

export default App;
