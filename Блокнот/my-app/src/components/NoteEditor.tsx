import { Editor, EditorTitle, TextArea } from '../styles'
import type { Note } from '../types/note'

type NoteEditorProps = {
  note: Note | undefined
  onChange: (text: string) => void
}

export function NoteEditor({ note, onChange }: NoteEditorProps) {
  const hasNote = note !== undefined

  return (
    <Editor>
      <EditorTitle>{hasNote ? 'Редактирование заметки' : 'Нет заметки'}</EditorTitle>
      <TextArea
        value={note?.text ?? ''}
        onChange={(event) => onChange(event.target.value)}
        placeholder={hasNote ? 'Напишите текст заметки...' : 'Сначала создайте заметку'}
        disabled={!hasNote}
        aria-label="Текст заметки"
      />
    </Editor>
  )
}
