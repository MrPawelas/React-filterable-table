import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TableComponent from './components/TableComponent';
import { NewMiniatureComponent } from './components/NewMiniatureComponent';
import { FilterAndSortComponent } from './components/FilterAndSortComponent';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lastNewAdded: 1,
      models: [],
      //   ["Osgiliath™ Veterans", "This set contains 3 metal Osgiliath Veterans, 1 with a spear, 1 with a bow and 1 with a sword and shield. Supplied with 4 25mm round bases",
      //     "https://www.games-workshop.com/resources/catalog/product/920x950/99061464110_OsgiliathVeteransNEW01.jpg", 3],
      //   ["Fellowship Of The Ring", "This multipart plastic box set contains 13 components and ten 25mm Round Bases with which to make The Fellowship of the Ring as well as one Ring Priority Marker",
      //     "https://www.games-workshop.com/resources/catalog/product/920x950/99121499028_TheFellowshipoftheRingPlasticNEW01.jpg", 5],
      //   ["Fellowship Of The Ring2", "ThRing as well as one Ring Priority Marker",
      //     "https:", 5],
      //   ["Mounted Rohan™ Command", "The set contains 4 metal miniatures – a Captain on foot and mounted, and a Banner Bearer on foot and mounted – as well as two plastic horses.",
      //     "https://www.games-workshop.com/resources/catalog/product/920x950/99111464205_MERohanMountedCommand01.jpg", 4]
      // ],
      sort: (model1, model2) => (model1[0].toString().toLowerCase() < model2[0].toString().toLowerCase() ? -1 : 1),
      filter: (model) => true
    }
    this.onDelete = this.onDelete.bind(this)
    this.onNew = this.onNew.bind(this)
    this.onSortChange = this.onSortChange.bind(this)
    this.onFilterChange = this.onFilterChange.bind(this)
  }

  componentDidMount() {
    fetch(this.props.localModels)
      .then(response => {response.json()})
      .then(data => {console.log(data)})
      console.log(this.state.models)
  }

  onDelete(miniatureName) {
    const filteredModels = this.state.models.filter(miniature => miniature[0] !== miniatureName)
    this.setState({
      models: filteredModels
    })
  }
  onNew(model) {
    let nameModel = model[0]
    let lastNewAddedCounter = this.state.lastNewAdded // Names are keys in table so they have to be unique. Thanks to that if a user clicks multiple times "add new" it doesnt cause problems.

    if (this.state.models.filter(miniature => miniature[0] === nameModel).length > 0) {
      nameModel = nameModel + lastNewAddedCounter
      lastNewAddedCounter++
    }

    this.setState({
      lastNewAdded: lastNewAddedCounter,
      models: [[nameModel, model[1], model[2], model[3]], ...this.state.models]
    })
  }
  onEdit() {
    this.setState({
      lastNewAdded: this.state.lastNewAdded + 1,
      models: [["Unique name of model" + this.state.lastNewAdded, "Description", "link to image", 0], ...this.state.models]
    })
  }

  onSortChange(comparator) {
    this.setState(
      {
        sort: comparator
      }
    )
  }
  onFilterChange(filter) {
    this.setState(
      {
        filter: filter
      }
    )
  }

  render() {
    let visbleModels = this.state.models.sort(this.state.sort).filter(this.state.filter)
    return (
      <div className="App">
        <FilterAndSortComponent onFilterChange={this.onFilterChange} onSortChange={this.onSortChange} />
        <NewMiniatureComponent onNew={this.onNew} models={this.state.models} />
        <TableComponent models={visbleModels} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;

// .sort((a, b) => a.itemM > b.itemM ? 1 : -1)