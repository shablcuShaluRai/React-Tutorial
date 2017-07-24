import React, { Component } from 'react';

import './App.css';
// stateless Component example

class App extends Component {
  render() {
    return (
      // div is jsx code
    <div>
{/*Header  and Content  component called inside the jsx */}
    <Header/>
   <Content/>

    </div>
    );
  }
}

//it is also a component
class Header extends Component {
  render(){
    return(
      <div className = "App">
      <h1 className = "rcorners1"> Header </h1>
</div>

    )
  }

  }
  class Content extends Component {
     render(){
       return(
         <div>
         <p> This is content</p>
         <h2> content </h2>
       </div>
     )
     }
  }


export default App;
