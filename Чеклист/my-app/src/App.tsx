import { useState } from 'react'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { Page, Subtitle, Title, TodoCard } from './styles'
import type { Task } from './types/task'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(text: string) {
    const newTask: Task = {
      id: Date.now(),
      text,
      done: false,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  function toggleTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  function deleteTask(id: number) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  function editTask(id: number, text: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, text } : task)),
    )
  }

  return (
    <Page>
      <TodoCard>
        <Title>Мой чеклист</Title>
        <Subtitle>Планируй дела и отмечай выполненные.</Subtitle>

        <TaskForm onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </TodoCard>
    </Page>
  )
}

export default App
