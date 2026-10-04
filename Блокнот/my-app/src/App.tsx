import { useState } from 'react'
import { NoteEditor } from './components/NoteEditor'
import { NoteSidebar } from './components/NoteSidebar'
import { Notebook, Page, Subtitle, Title } from './styles'
import type { Note } from './types/note'

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  const selectedNote = notes.find((note) => note.id === selectedId)
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase()),
  )

  function createNote() {
    const newNote: Note = {
      id: Date.now(),
      text: '',
    }

    setNotes((currentNotes) => [...currentNotes, newNote])
    setSelectedId(newNote.id)
  }

  function updateNote(text: string) {
    if (selectedId === null) return

    setNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === selectedId ? { ...note, text } : note,
      ),
    )
  }

  function deleteNote(id: number) {
    const remainingNotes = notes.filter((note) => note.id !== id)
    setNotes(remainingNotes)

    if (id === selectedId) {
      setSelectedId(remainingNotes[0]?.id ?? null)
    }
  }

  return (
    <Page>
      <Title>Мой блокнот</Title>
      <Subtitle>Создавай заметки, ищи их и редактируй текст.</Subtitle>

      <Notebook>
        <NoteSidebar
          notes={filteredNotes}
          selectedId={selectedId}
          search={search}
          onSearchChange={setSearch}
          onCreate={createNote}
          onSelect={setSelectedId}
          onDelete={deleteNote}
        />
        <NoteEditor note={selectedNote} onChange={updateNote} />
      </Notebook>
    </Page>
  )
}

export default App
