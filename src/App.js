import React, { Component } from 'react';


import './App.css';


class App extends Component {
state={
  data: 'intial data  '
}
//The bind() method creates a new function that, when called, has its this keyword set to the provided value,
//with a given sequence of arguments preceding any provided when the new function is called.

updateState = this.updateState.bind(this)
//updateState is used to update the input value of form
 updateState(e){
  //  The target event property returns the element that triggered the event.
   this.setState({data:e.target.value})
 }

  render(){
    return(
<div>
<input type = "text" value = {this.state.data}
onChange = {this.updateState} />
<h4>{this.state.data}</h4>
</div>


    )
  }

}

export default App;
