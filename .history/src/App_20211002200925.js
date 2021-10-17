import logo from './logo.svg';
import React from "react";
import reactDOM from "react-dom";
import './App.css';
import TableComponent from './components/TableComponent';
import { NewMiniatureComponent } from './components/NewMiniatureComponent';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lastNewAdded : 1, //name is a key in table so to avoid bug of adding multiple new empty row i add unique number to every new name
      models: [
        ["Osgiliath™ Veterans", "This set contains 3 metal Osgiliath Veterans, 1 with a spear, 1 with a bow and 1 with a sword and shield. Supplied with 4 25mm round bases",
          "https://www.games-workshop.com/resources/catalog/product/920x950/99061464110_OsgiliathVeteransNEW01.jpg", 3],
        ["Fellowship Of The Ring", "This multipart plastic box set contains 13 components and ten 25mm Round Bases with which to make The Fellowship of the Ring as well as one Ring Priority Marker",
          "https://www.games-workshop.com/resources/catalog/product/920x950/99121499028_TheFellowshipoftheRingPlasticNEW01.jpg", 5],
        ["Fellowship Of The Ring2", "ThRing as well as one Ring Priority Marker",
          "https:", 5],
        ["Mounted Rohan™ Command", "The set contains 4 metal miniatures – a Captain on foot and mounted, and a Banner Bearer on foot and mounted – as well as two plastic horses.",
          "https://www.games-workshop.com/resources/catalog/product/920x950/99111464205_MERohanMountedCommand01.jpg", 4]
      ]
    }
    this.onDelete = this.onDelete.bind(this)
    this.onNew = this.onNew.bind(this)
  }


  onDelete(miniatureName) {
    const filteredModels = this.state.models.filter(miniature => miniature[0] !== miniatureName)
    this.setState({
      models: filteredModels
    })
  }
  onNew(model) {    
    this.setState({
    //  lastNewAdded : this.state.lastNewAdded+1,
      models: [[model[0], model[1],model[2], model[3]], ...this.state.models]
    })
  }  
  onEdit() {    
    this.setState({
      lastNewAdded : this.state.lastNewAdded+1,
      models: [["Unique name of model" +this.state.lastNewAdded, "Description", "link to image", 0], ...this.state.models]
    })
  }
  render() {
    return (
      <div className="App">
        <NewMiniatureComponent onNew ={this.onNew} models={this.state.models}/>
        {/* <button onClick={this.onNew}>ADD NEW</button> */}
        <TableComponent models={this.state.models} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
