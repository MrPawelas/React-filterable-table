import React from "react"
import { Col, Container, Row, } from "react-bootstrap"



export class FilterAndSortComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toSort: "NameAsc",
            nameFilter: "",
            ratingDownFilter: "",
            ratingUpperFilter: "",
            descriptionFilter: ""
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
        let result = [(model) => true, (model) => true, (model) => true, (model) => true]

        if (this.state.nameFilter) {

            result[0] = (model) => { return (new RegExp(this.state.nameFilter)).test(model[0]) }
        }
        if (this.state.ratingDownFilter) {

            result[1] = (model) => { return (model[3]>=parseInt(this.state.ratingUpperFilter)) }
        }
        if (this.state.ratingUpperFilter) {

            result[2] = (model) => { return (model[3]<=parseInt(this.state.ratingUpperFilter)) }
        }
        if (this.state.descriptionFilter) {

            result[3] = (model) => { return (new RegExp(this.state.descriptionFilter)).test(model[1]) }
        }

        return (model) => { return (result[0](model) && result[1](model) && result[2](model) && result[3](model)) }

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
        const { name, value } = event.target
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
        if (prevState.nameFilter !== this.state.nameFilter) {

            const filter = this.createFilter()
            this.props.onFilterChange(filter)
            console.log(filter)
        }
    }

    render() {
        return (
            <Container fluid >
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

                    <Col className="text-end"><label>Filters: </label></Col>
                    <Col className="text-start">Name (regex): <input type="text" name="nameFilter" value={this.state.nameFilter} onChange={this.onFilterInputChange} /></Col>
                    <Col className="text-start">Description (regex): <input type="text" name= "descriptionFilter" value={this.state.descriptionFilter} onChange={this.onFilterInputChange} /></Col>
                    <Col className="text-start">Minimal rating: <input type="text" name= "ratingDownFilter" value={this.state.ratingDownFilter} onChange={this.onFilterInputChange} /></Col>
                    <Col className="text-start">Maximal rating: <input type="text" name= "ratingUpperFilter" value={this.state.ratingUpperFilter} onChange={this.onFilterInputChange} /></Col>

                </Row>
            </Container>
        )
    }
}