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
        {models}
        </tbody>
    </table>

    )
}
export default TableComponent