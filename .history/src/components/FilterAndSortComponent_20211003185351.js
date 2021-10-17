import React from "react"
import { Col, Container, Row, } from "react-bootstrap"



export class FilterAndSortComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toSort: "NameAsc",
            nameFilter: "",
            ratingDownFilter: "",
            ratingUpperFilter: ""
        }
        this.onSortInputChange = this.onSortInputChange.bind(this)
        this.onFilterInputChange = this.onFilterInputChange.bind(this)
        this.createComparator = this.createComparator.bind(this)
        this.createFilter = this.createFilter.bind(this)

    }

    createComparator() {
        switch (this.state.toSort) {
            case "NameAsc":
                return ((model1, model2) => (model1[0].toString().toLowerCase() < model2[0].toString().toLowerCase() ? -1 : 1))
            case "NameDsc":
                return ((model1, model2) => (model1[0].toString().toLowerCase() < model2[0].toString().toLowerCase() ? 1 : -1))
            case "RatingAsc":
                return ((model1, model2) => (model1[3] < model2[3] ? -1 : 1))
            case "RatingDsc":
                return ((model1, model2) => (model1[3] < model2[3] ? 1 : -1))
            default:
                return ((model1, model2) => 0)

        }
    }

    createFilter() {
        let filter = (model) => true
        if(this.state.nameFilter) {
            filter =  (model) => {return ( filter(model) && (new RegExp(this.state.nameFilter)).test(model[0]))}
        }
        return filter
        
    }

    onSortInputChange(event) {
        const value = event.target.value
        this.setState(
            {
                toSort: value
            }
        )
    }

    onFilterInputChange(event) {
        const {name, value} = event.target
        this.setState(state =>
            ({
                ...state,
                [name]: value
            })
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.toSort !== this.state.toSort)
            this.props.onSortChange(this.createComparator())
        if (prevState.nameFilter !== this.state.nameFilter){
            const filter = this.createFilter()
            this.props.onFilterChange(filter)
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                <Col className="text-start"> <label>Sorting: &emsp;</label>
                        <select value={this.state.toSort}
                        onChange={this.onSortInputChange}>
                        <option value="NameAsc">Name ascending</option>
                        <option value="NameDsc">Name descending</option>
                        <option value="RatingAsc">Rating ascending</option>
                        <option value="RatingDsc">Rating descending</option>
                    </select>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-start"><label>Filters: </label></Col>
                    <Col>Name: <input type="text" value={this.state.nameFilter} onChange={this.onFilterInputChange}/></Col>

                </Row>
            </Container>
        )
    }
}