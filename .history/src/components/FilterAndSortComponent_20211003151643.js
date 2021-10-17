import React from "react"



export class FilterAndSortComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toSort: "NameAsc"
        }
        this.onSortInputChange = this.onSortInputChange.bind(this)
        this.createComparator = this.createComparator.bind(this)

    }

    createComparator(){
        switch(this.state.toSort){
            case "NameAsc":
                return ( (model1, model2) => (model1[0].toString().toLowerCase() < model2[0].toString().toLowerCase() ? 1: -1))
            case "NameDsc":
                return ( (model1, model2) => (model1[0].toString().toLowerCase() < model2[0].toString().toLowerCase() ? -1: 1))
            case "RatingAsc":
                return ( (model1, model2) => (model1[3] < model2[3] ? 1: -1))
            case "RatingDsc":
                return ( (model1, model2) => (model1[3] < model2[3] ? -1: 1))
            default :
                return ( (model1, model2) => 0)

        }
    }

    onSortInputChange(event) {
        const value = event.target.value

        this.setState(
            {
                toSort: value
            }
        )
        
        this.props.onSortChange(this.createComparator())
    }


    render(){
        return(
            <div>
                <label>Sort: </label>
                <select value={this.state.toSort}
                onChange={this.onSortInputChange}>
                    <option value="NameAsc">Name ascending</option>
                    <option value="NameDsc">Name descending</option>
                    <option value="RatingAsc">Rating ascending</option>
                    <option value="RatingDsc">Rating descending</option>
                </select>


            </div>
        )
    }
}