import React from "react";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { MiniatureComponent } from "./MiniatureComponent";
function TableComponent(props) {


    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Rating</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.models.map(model => <MiniatureComponent key={model[0]} model={model} onDelete={props.onDelete} />)}
            </tbody>
        </Table>

    )
}
export default TableComponent