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
            <th></th>
        </tr>
        </thead>
        <tbody>
        {props.models.map(model => <MiniatureComponent model ={model} onDelete ={props.onDelete}/>)}
        </tbody>
    </table>

    )
}
export default TableComponent