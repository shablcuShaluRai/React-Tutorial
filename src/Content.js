import React,{ Component } from 'react'

class Content extends Component{


render(){
  return(
<div>
<input type = "text" value = {this.props.dataProp} onChange = {this.props.onUpdate}/>
<h3> {this.props.dataProp}</h3>
</div>
  )
}

}
export default Content
