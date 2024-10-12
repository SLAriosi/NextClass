'use client'
import { useState } from "react"

export default function Dinamico(
    { params }: { params: { id: string } }
) {

    const [contador, setcontador] = useState(0)
    console.log("Use State aqui")

    return (
        <h1>
            Dinâmico {params.id}
        </h1>
    )
}