import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';


class App extends Component {
state={
  data: ' '
}
////////  using Arrow function///////
//An arrow function expression has a shorter syntax than a function expression and does not bind its own this,
//arguments, super, or new.target. These function expressions are best suited for non-method functions,
// and they cannot be used as constructors.


//updateState is used to update the input value of form
 updateState = (e)=>{
  //  The target event property returns the element that triggered the event.
   this.setState({data: e.target.value})
 }
 //is used for clear the data.
 clearQuery = () => {
   this.setState({data : ' '})
  //  ReactDOM.findDOMNode(this.refs.myInput).focus();
 }

  render(){
    return(
<div>
{/*The ref is used to return a reference to your element. Refs should be avoided in most cases but they can be useful when  need DOM measurements or to add methods to our components.*/}
{/* <input value= {this.state.data} onChange ={this.updateState}   ref = "myInput"/>*/}
<input value= {this.state.data} onChange ={this.updateState}/>
<h3>{this.state.data}</h3>
<button onClick = {this.clearQuery} > click </button>
</div>


    )
  }

}

export default App;
