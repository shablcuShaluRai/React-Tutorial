import React, { Component } from 'react';

import './App.css';
// stateful Component example

class App extends Component {
  //State is the place where the data comes from.
  state = {
    data : [
      {    "id" : "1",
          "name" : "shalu",
          "age" : "21"
      },
      {
        "id" : "2",
        "name":"sahil",
        "age" : "19"
      },
      {
        "id" :"3",
        "name": "Ayush",
        "age" : "9"
      }
    ]
  }
  render() {
    return (

<div className = "App">
<Header/>
<table>
<tbody>
{/* it takes each element of data array and calling the tablerow jsx on every element.*/}
{/*//e.g <TableRow key=0 data={id: "1",name : "shalu",age = "21"}*/}

{this.state.data.map((person,index) =>
  <TableRow
  key = {index}
  data = {person}
  />

)}
</tbody>
</table>
</div>
   )
     }
  }

  class   Header extends Component {
    render(){
      return(

<div className = "App" >
<h1 className = "rcorners1"> Stateful Component </h1>

</div>

      )
    }
  }

class TableRow extends Component{
  render(){
    return(
    <tr>
<td>{this.props.data.id}</td>
<td>{this.props.data.name}</td>
<td>{this.props.data.age}</td>
    </tr>


    )
  }
}




export default App;
