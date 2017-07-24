import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      // div is jsx code
    <div>
    {/*nested element*/}
    {/* one or more element wrap with one container class.
      * here div is container class and h1,p,h2 is the element .
       */}
    <div className = "App">
    <h1 className = "rcorners1"> Header </h1>
<p> this is content</p>
<h2> content </h2>
{/*javascript expression can be used inside jsx*/}

<h1>{1+2+3+4}</h1>
</div>
    </div>
    );
  }
}

export default App;
