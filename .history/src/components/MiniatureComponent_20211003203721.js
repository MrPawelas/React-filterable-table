import React from "react"
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
export function MiniatureComponent(props) {
    return (
        <tr className="center-cell">
            <td >
                {props.model[0]}
            </td>
            <td >
                {props.model[1]}
            </td>
            <td >
                <Image className="photo" src={props.model[2]} thumbnail />
                {/* <img  src={props.model[2]} alt="No photo loaded" /> */}
            </td>
            <td >
               {props.model[3]}
            </td>
            <td>
                <Button variant="danger" onClick={() => { props.onDelete(props.model[0]) }}>DELETE</Button>
            
                <Button variant="success" onClick={() => { props.onRatingChange(props.model[0],1) }}>Rating up</Button>
            
            
                <Button variant="warning" onClick={() => { props.onRatingChange(props.model[0],-1) }}>Rating down</Button>
            </td>
        </tr>
    )
}