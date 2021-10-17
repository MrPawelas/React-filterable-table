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
      sort: (model1, model2) => (model1[0].toString().toLowerCase() < model2[0].toString().toLowerCase() ? -1 : 1),
      filter: (model) => true
    }
    this.onDelete = this.onDelete.bind(this)
    this.onNew = this.onNew.bind(this)
    this.onSortChange = this.onSortChange.bind(this)
    this.onFilterChange = this.onFilterChange.bind(this)
  }

  componentDidMount() {
    fetch("./data.json", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
      .then(function(response){
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          models: myJson
        })
      })

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