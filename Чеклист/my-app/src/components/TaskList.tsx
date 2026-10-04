import { EmptyText, List } from '../styles'
import type { Task } from '../types/task'
import { TaskItem } from './TaskItem'

type TaskListProps = {
  tasks: Task[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onEdit: (id: number, text: string) => void
}

export function TaskList({ tasks, onToggle, onDelete, onEdit }: TaskListProps) {
  if (tasks.length === 0) {
    return <EmptyText>Список пока пуст.</EmptyText>
  }

  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </List>
  )
}
