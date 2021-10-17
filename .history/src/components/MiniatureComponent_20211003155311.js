import React from "react"
export function MiniatureComponent(props) {
    return (
        <tr >
            <td >
                <div>{props.model[0]}</div>
            </td>
            <td >
                <div>{props.model[1]}</div>
            </td>
            <td >
                <img className="photo" src={props.model[2]} alt="No photo loaded" />
            </td>
            <td >
                <div>{props.model[3]}</div>
            </td>
            <td>
                <Button variant="danger" onClick={() => { props.onDelete(props.model[0]) }}>DELETE</Button>
            </td>
        </tr>
    )
}