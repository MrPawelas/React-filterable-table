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
                <div>{props.model[2]}</div>
            </td>
            <td >
                <div>{props.model[3]}</div>
            </td>
            <td>
                <button >EDIT</button>
            </td>
        </tr>
    )
}