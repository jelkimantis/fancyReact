import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


class Square extends React.Component {
  constructor(props){
    super(props);
    this.getFancy = this.getFancy.bind(this);

    this.state={
      color: "purple"
    }
  }
  getFancy() {
    let fancyColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
    this.setState({color: fancyColor});
    console.log("here");
   }

  render(){
    return (
      <div
      onMouseOver={this.getFancy}
      className="fancyDiv"
      style={{backgroundColor: this.state.color}}
      >{this.props.value}</div>
      )
    }
  }

class App extends React.Component {
 constructor(props){
  super(props);
  
  this.renderSquare = this.renderSquare.bind(this);
 }
 
renderSquare(props) {
  return(
<div
     onMouseOver={this.getFancy}
     className="fancyDiv"
     style={{backgroundColor: this.state.color}}
   >{props}</div>
  );
}
  render(){
 
    // let divGrid = [];
    // for(let i = 0; i < 100; i++){
      // divGrid.push(this.square(i))
      // AN IDEA: Set the color inside the for loop??
      // let currentColor = "style={{backgroundColor: this.state.color}}"

      // divGrid.push 
      //   (<div
      //     onMouseOver={this.getFancy}
      //     className="fancyDiv"
      //     style={{backgroundColor: this.state.color}}
      //   ></div>)
    // }
    return (
    <div className="bigDiv"><Square/><Square /></div>
  );
 }
}

export default App;
