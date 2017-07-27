import React, { Component } from 'react';
import Content from "./Content"

import './App.css';


class App extends Component {
state={
  data: 'intial data  '
}
////////  using Arrow function///////
//An arrow function expression has a shorter syntax than a function expression and does not bind its own this,
//arguments, super, or new.target. These function expressions are best suited for non-method functions,
// and they cannot be used as constructors.


//updateState is used to update the input value of form
 updateState = (e)=>{
  //  The target event property returns the element that triggered the event.
   this.setState({data:e.target.value})
 }

  render(){
    return(
<div>
<Content
dataProp = {this.state.data}
onUpdate = {this.updateState}


/>

</div>


    )
  }

}

export default App;
