import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
 constructor(props){
  super(props);
  this.state={
    color: "purple"
  }
  this.getFancy = this.getFancy.bind(this);
  this.Square = this.Square.bind(this);
 }
 getFancy() {
  let fancyColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
  this.setState({color: fancyColor});
  console.log("here");
 }

 Square(props) {
 
  return (
    <div
      onMouseOver={this.getFancy}
      className="fancyDiv"
      style={{backgroundColor: this.state.color}}
    >{this.props.value}</div>
  )
}
  render(){
 
    let divGrid = [];
    for(let i = 0; i < 100; i++){
      divGrid.push(this.Square(i))
      // divGrid.push 
      //   (<div
      //     onMouseOver={this.getFancy}
      //     className="fancyDiv"
      //     style={{backgroundColor: this.state.color}}
      //   ></div>)
    }
    return (
    <div className="bigDiv">{divGrid}</div>
  );
 }
}

export default App;
