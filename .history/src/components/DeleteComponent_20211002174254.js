import React from "react"

export function DeleteComponent(props) {
        return props.models.filter(miniature => miniature.name !== props.miniatureName)
}