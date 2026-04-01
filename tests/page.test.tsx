import { render, screen } from "@testing-library/react"
import Page from "@/app/page"

test("renderiza lista de tarefas", async () => {
  const Component = await Page()

  render(Component)

  expect(screen.getByText("Estudar Next.js")).toBeInTheDocument()
  expect(screen.getByText("Aprender testes")).toBeInTheDocument()
})
