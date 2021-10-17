import React from "react";

function TableComponent(props) {


    return(
        <table>
        <thead>
        <tr>
            <th>Name</th>
{/*             <th>Description</th>
            <th>Image</th>
            <th>Rating</th>
            <th>Actions</th> */}
        </tr>
        </thead>
        <tbody>
        {props.models.map(model => <tr><td>{model}</td></tr>) }
        </tbody>
    </table>

    )
}
export default TableComponent