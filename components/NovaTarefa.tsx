"use client"

import { useState } from "react"

type Props = {
  onAdicionar: (titulo: string) => void
}

export default function NovaTarefa({ onAdicionar }: Props) {
  const [titulo, setTitulo] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!titulo.trim()) return

    onAdicionar(titulo)
    setTitulo("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nova tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
