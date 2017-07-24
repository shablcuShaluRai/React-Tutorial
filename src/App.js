import React, { Component } from 'react';

import './App.css';

//We are setting state in our parent component and passing it down the component tree using props. 

class App extends Component {
  state = {
    header : "header can be accessed by props" ,
    content : " content can be accessed by props"
  }

  render(){
    return(

<div>
<Header
/*Here data has passed (this.state.header: because it is property of state) in headers*/
headers = {this.state.header}
/>
<Content
contents = {this.state.content}
/>

</div>



    )
  }
  }


class Header extends Component {
  render(){
    return(
      <div>
      {/* here data accesses by using  of props,
          it renders  the value of headers.
        */}

      <h1>{this.props.headers}</h1>
      </div>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <div>
      <h2>{this.props.contents}</h2>
      </div>
    )
  }
}


export default App;
