import React from "react"

export function MiniatureComponent(props) {
    return (
        <tr>
            <td >
                <div>{props.model[0]}</div>
            </td>
            <td >
                <div>{props.model[1]}</div>
            </td>
            <td >
                <img className="photo" src={props.model[2]} alt="no photo loaded"/>
            </td>
            <td >
                <div>{props.model[3]}</div>
            </td>
            <td>
                <button onClick={this.props.onDelete}>DELETE</button>
            </td>
        </tr>
    )
}