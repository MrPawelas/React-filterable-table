import React from "react"

export function MiniatureComponent(props) {
    return (
        <tr key ={props.model[0]}>
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
                <button onClick={()=>{props.onDelete(props.model[0])}}>DELETE</button>
            </td>
        </tr>
    )
}