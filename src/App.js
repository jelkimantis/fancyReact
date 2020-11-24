import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
 render(){
 
    let divGrid = [];
    
    for(let i = 0; i < 100; i++){
      divGrid.push 
        (<div
          className="fancyDiv"
        >X</div>)
    }
    return (
    <div className="bigDiv">{divGrid}</div>
  );
 }
}

export default App;
