import React from "react"
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
export function MiniatureComponent(props) {
    return (
        <tr div classname="align-me">
            <td classname= "align-me">
                <div classname= "align-me">{props.model[0]}</div>
            </td>
            <td >
                <div classname= "align-me">{props.model[1]}</div>
            </td>
            <td >
                     <Image className="photo" src={props.model[2]} thumbnail />
                {/* <img  src={props.model[2]} alt="No photo loaded" /> */}
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