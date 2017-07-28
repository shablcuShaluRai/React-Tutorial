import React, { Component } from 'react';


import './App.css';


class App extends Component {
state={
  data:[ {
    'id':1,
    'compont':'first'
},
{
  'id':2 ,
  'compont' : 'second'
},
{
  'id' :3 ,
  'compont' : 'third'
}
]
}

render(){
  return (
    <div>
    {/*React keys are useful when working with dynamically created components or when lists are altered by users*/}
    {/*setting the key value will keep our component uniquely */}
    {this.state.data.map((component,index) =>
      <Content
      key = {index}
      components = {component}
      />

    )}
</div>

  )
}

}


class Content extends Component{
  render(){
    return(
      <div>
      <div>{this.props.components.compont}</div>
      <div>{this.props.components.id}</div>
</div>
    )
  }
}

export default App;
