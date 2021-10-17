import React from "react"

export function MiniatureComponent(props) {
    return (
        <tr>
            <td >
                <div className="cell">{props.model[0]}</div>
            </td>
            <td >
                <div className="cell">{props.model[1]}</div>
            </td>
            <td >
                <div className="cell">
                <img className="photo" src={props.model[2]} alt="no photo loaded"/>
                </div>
            </td>
            <td >
                <div className="cell">{props.model[3]}</div>
            </td>
            <td>
            <div className="cell">
                <button >DELETE</button>
                </div>
            </td>
        </tr>
    )
}