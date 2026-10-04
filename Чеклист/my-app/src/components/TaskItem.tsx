import { useState } from 'react'
import {
  DeleteButton,
  EditInput,
  Item,
  SmallButton,
  TaskText,
} from '../styles'
import type { Task } from '../types/task'

type TaskItemProps = {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onEdit: (id: number, text: string) => void
}

export function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(task.text)

  function saveTask() {
    const trimmedText = text.trim()
    if (!trimmedText) return

    onEdit(task.id, trimmedText)
    setIsEditing(false)
  }

  function cancelEdit() {
    setText(task.text)
    setIsEditing(false)
  }

  return (
    <Item>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
        aria-label={`Отметить дело: ${task.text}`}
      />

      {isEditing ? (
        <EditInput
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') saveTask()
            if (event.key === 'Escape') cancelEdit()
          }}
          autoFocus
          aria-label="Изменить дело"
        />
      ) : (
        <TaskText done={task.done}>{task.text}</TaskText>
      )}

      {isEditing ? (
        <>
          <SmallButton type="button" onClick={saveTask}>
            Сохранить
          </SmallButton>
          <SmallButton type="button" onClick={cancelEdit}>
            Отмена
          </SmallButton>
        </>
      ) : (
        <>
          <SmallButton type="button" onClick={() => setIsEditing(true)}>
            Изменить
          </SmallButton>
          <DeleteButton type="button" onClick={() => onDelete(task.id)}>
            Удалить
          </DeleteButton>
        </>
      )}
    </Item>
  )
}
