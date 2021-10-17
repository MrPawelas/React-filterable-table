import React from "react"
import { MiniatureComponent } from "./MiniatureComponent"

export function DeleteComponent(props) {
        return props.models.filter(miniature => miniature.name !== props.miniatureName)
}