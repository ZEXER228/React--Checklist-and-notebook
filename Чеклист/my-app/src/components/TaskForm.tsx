import { useState } from 'react'
import { Button, Form, TextInput } from '../styles'

type TaskFormProps = {
  onAdd: (text: string) => void
}

export function TaskForm({ onAdd }: TaskFormProps) {
  const [text, setText] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedText = text.trim()
    if (!trimmedText) return

    onAdd(trimmedText)
    setText('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Например, заняться спортом"
        aria-label="Новое дело"
      />
      <Button type="submit">Добавить</Button>
    </Form>
  )
}
