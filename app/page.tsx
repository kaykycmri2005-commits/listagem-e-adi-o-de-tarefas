import { getTarefas } from "@/lib/tarefas"
import NovaTarefa from "@/components/NovaTarefa"
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas"

export default async function Page() {
  const tarefas = await getTarefas()

  return (
    <main>
      <h1>Lista de Tarefas</h1>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>

      <NovaTarefa onAdicionar={() => {}} />

      {/* Hook não roda direto em Server Component → usar workaround */}
      <p>Total: {tarefas.length}</p>
    </main>
  )
}
