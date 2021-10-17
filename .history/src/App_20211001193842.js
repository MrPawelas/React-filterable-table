import logo from './logo.svg';
import React from "react";
import reactDOM from "react-dom";
import './App.css';
import TableComponent from './components/TableComponent';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      models: [
        ["Osgiliath™ Veterans","This set contains 3 metal Osgiliath Veterans, 1 with a spear, 1 with a bow and 1 with a sword and shield. Supplied with 4 25mm round bases",
      "https://www.games-workshop.com/resources/catalog/product/920x950/99061464110_OsgiliathVeteransNEW01.jpg",3],
      ["Fellowship Of The Ring", "This multipart plastic box set contains 13 components and ten 25mm Round Bases with which to make The Fellowship of the Ring as well as one Ring Priority Marker",
    "https://www.games-workshop.com/resources/catalog/product/920x950/99121499028_TheFellowshipoftheRingPlasticNEW01.jpg",5],
      ["Mounted Rohan™ Command","The set contains 4 metal miniatures – a Captain on foot and mounted, and a Banner Bearer on foot and mounted – as well as two plastic horses.",
    "https://www.games-workshop.com/resources/catalog/product/920x950/99111464205_MERohanMountedCommand01.jpg",4]
      ]
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
