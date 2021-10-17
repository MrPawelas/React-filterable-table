import React from "react";
import { MiniatureComponent } from "./MiniatureComponent";
function TableComponent(props) {


    return(
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Rating</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {props.models.map(model => <MiniatureComponent model ={model}/>)}
        </tbody>
    </table>

    )
}
export default TableComponent