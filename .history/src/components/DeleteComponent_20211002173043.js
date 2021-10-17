import React from "react"
import { MiniatureComponent } from "./MiniatureComponent"

export function DeleteComponent(table,miniatureName) {
        return table.filter(miniature => miniature.name !== miniatureName)
}