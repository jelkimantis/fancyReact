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
 }
 getFancy() {
  let fancyColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
  this.setState({color: fancyColor});
  console.log("here");
 }

  render(){
 
    let divGrid = [];
    
    for(let i = 0; i < 100; i++){
      divGrid.push 
        (<div
          onMouseOver={this.getFancy}
          className="fancyDiv"
          style={{backgroundColor: this.state.color}}
        ></div>)
    }
    return (
    <div className="bigDiv">{divGrid}</div>
  );
 }
}

export default App;
