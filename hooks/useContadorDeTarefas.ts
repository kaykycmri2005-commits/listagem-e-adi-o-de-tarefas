import { useMemo } from "react"
import { Tarefa } from "@/lib/tarefas"

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  const total = useMemo(() => tarefas.length, [tarefas])
  return total
}
