import React,{ Component } from 'react'

class Content extends Component{


render(){
  return(
    <div>
       <button onClick= {this.props.onUpdate}>click</button>
       <h3> {this.props.dataProp}</h3>
   </div>
  )
}

}
export default Content
