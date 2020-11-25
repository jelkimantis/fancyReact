import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// The class "square" creates a component of <Square/> that can be used in our JSX (think: fake HTML) below
class Square extends React.Component {
  constructor(props){
    super(props);
    this.getFancy = this.getFancy.bind(this);
    this.unShadow = this.unShadow.bind(this);

    this.state={ // Initialize the color - when blank as at startup, it'll just use the CSS to set the color. This could be anything, purple, green, whatever.
      color: "",
      getClassNames: "fancyDiv"
    }
  }
  getFancy() {
    let fancyColor = '#'+ Math.floor(Math.random()*16777215).toString(16); 
    this.setState({
      color: fancyColor, 
      getClassNames: "fancyDiv addShadow"
    }); // Changes the state color to the random color from the line above.
    // console.log("here");
   }

   unShadow() {
    this.setState({getClassNames: "fancyDiv"}); // Removes the "addShadow" div
   }

  render(){
    return (
      <div
      onMouseOver={this.getFancy} // runs the getFancy function on the specific moused-over element
      onMouseOut={this.unShadow}
      className={this.state.getClassNames}
      // "fancyDiv addShadow"
      style={{backgroundColor: this.state.color}} // Changes the background color to the currently-set state of color
      ></div> 
      )
    }
  }

class App extends React.Component {

  render(){
 
    let divGrid = [];
    for(let i = 0; i < 100; i++){
    divGrid.push(<Square/>) // See above? Where we make Square? That's actually happening here!
    }
    return (
    <div className="bigDiv">{divGrid}</div>
  );
 }
}

export default App;
