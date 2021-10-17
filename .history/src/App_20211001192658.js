import logo from './logo.svg';
import React from "react";
import reactDOM from "react-dom";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      models: ["a","b","c"]
    }
  }

  render(){
    return (
      <div className="App">
        <TableComponent models = {this.state.models}/>
      </div>
    );
  }
}

export default App;
