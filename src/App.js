import React, { Component } from 'react';

import './App.css';


class App extends Component {
render(){
  return(
    <div>
           <h3>Array: {this.props.propArray}</h3>
           <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
           <h3>Func: {this.props.propFunc(3)}</h3>
           <h3>Number: {this.props.propNumber}</h3>
           <h3>String: {this.props.propString}</h3>
           <h3>Object: {this.props.propObject.objectName1}</h3>
           <h3>Object: {this.props.propObject.objectName2}</h3>
           <h3>Object: {this.props.propObject.objectName3}</h3>
        </div>
     );

}
}

// we can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
//  If I’m using a component written by another developer I have to figure out what props that component want, what’s required and also the correct type.
// React has a solution for this and its called propTypes. PropTypes defines type and which props are required.
// This benefits the future all developer using  component in two ways:

//1. we can easily open up a component and check which props are required and what type they should be.
//2. When things get messed up React will give  an awesome error message in the console, 
//saying which props is wrong/missing plus the render method that caused the problem.

App.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func,
   propNumber: React.PropTypes.number,
   propString: React.PropTypes.string,
   propObject: React.PropTypes.object
}
App.defaultProps = {
   propArray: [1,2,3,4,5],
   propBool: true,
   propFunc: function(e){return e},
   propNumber: 1,
   propString: "String value...",

   propObject: {
      objectName1:"objectValue1",
      objectName2: "objectValue2",
      objectName3: "objectValue3"
   }
}

export default App;
