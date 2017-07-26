import React, { Component } from 'react';
import ReactDOM from "react-dom"

import './App.css';

//
class App extends Component {
  //The bind() method creates a new function that, when called, has its this keyword set to the provided value,
  // with a given sequence of arguments preceding any provided when the new function is called.
  findDomNodeHandler = this.findDomNodeHandler.bind(this);

 findDomNodeHandler(){
   var myDiv = document.getElementById('myDiv');
   ReactDOM.findDOMNode(myDiv).style.color = 'green';
 }

render(){
  return(
    <div>
    //once we click on the buuton it call the findDomNodeHandler() ,and the color of div will change.
    <button onClick = {this.findDomNodeHandler}>find Dom Node</button>
     <div id= "myDiv"> hello,i m div </div>
    </div>
  );
   }
}

export default App;
