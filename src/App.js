import React, { Component } from 'react';


import './App.css';


class App extends Component {

state = {
  data:0
}
setNewNumber = this.setNewNumber.bind(this);
  setNewNumber(){
    //it increase the number by 1.
    this.setState({data: this.state.data + 1})
  }

render(){
  return(
    <div>
    <button onClick= {this.setNewNumber}>Increment</button>
  {/*it call the content class.*/}
    <Content myNumber = {this.state.data}></Content>
    </div>

  );
   }
}
class Content extends React.Component {
//Only componentWillMount and componentDidMount will be logged in console since we didn't update anything yet.
   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
//When we click INCREMENT button, the update will occur and other lifecycle methods will be triggered.
//i.e Component WILL RECIEVE PROPS!
// Component WILL UPDATE!
// Component DID UPDATE!
   componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
//After ten seconds, the component will unmount and the last event will be logged in console.
// Component WILL UNMOUNT!
componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}


export default App;
