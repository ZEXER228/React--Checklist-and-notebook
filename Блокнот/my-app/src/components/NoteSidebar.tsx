import {
  DeleteButton,
  EmptyText,
  Input,
  NoteButton,
  NoteRow,
  NotesList,
  PrimaryButton,
  Sidebar,
  SidebarHeader,
  SidebarTitle,
} from '../styles'
import type { Note } from '../types/note'

type NoteSidebarProps = {
  notes: Note[]
  selectedId: number | null
  search: string
  onSearchChange: (search: string) => void
  onCreate: () => void
  onSelect: (id: number) => void
  onDelete: (id: number) => void
}

export function NoteSidebar({
  notes,
  selectedId,
  search,
  onSearchChange,
  onCreate,
  onSelect,
  onDelete,
}: NoteSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTitle>Заметки</SidebarTitle>
        <PrimaryButton type="button" onClick={onCreate}>
          Новая
        </PrimaryButton>
      </SidebarHeader>

      <Input
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Поиск..."
        aria-label="Поиск заметок"
      />

      {notes.length === 0 ? (
        <EmptyText>Ничего не найдено.</EmptyText>
      ) : (
        <NotesList>
          {notes.map((note) => (
            <NoteRow key={note.id}>
              <NoteButton
                type="button"
                selected={note.id === selectedId}
                onClick={() => onSelect(note.id)}
              >
                {note.text.trim().split('\n')[0] || 'Без названия'}
              </NoteButton>
              <DeleteButton
                type="button"
                onClick={() => onDelete(note.id)}
                aria-label={`Удалить заметку: ${note.text || 'без названия'}`}
              >
                ×
              </DeleteButton>
            </NoteRow>
          ))}
        </NotesList>
      )}
    </Sidebar>
  )
}
