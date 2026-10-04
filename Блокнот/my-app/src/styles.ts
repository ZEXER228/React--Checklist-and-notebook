import styled from '@emotion/styled'

export const Page = styled.main`
  width: min(100% - 32px, 900px);
  margin: 0 auto;
  padding: 36px 0;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 30px;
`

export const Subtitle = styled.p`
  margin: 8px 0 24px;
  color: #6a6a6a;
`

export const Notebook = styled.section`
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 440px;
  overflow: hidden;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const Sidebar = styled.aside`
  padding: 16px;
  background: #f8f9fb;
  border-right: 1px solid #e1e4e8;

  @media (max-width: 650px) {
    border-right: 0;
    border-bottom: 1px solid #e1e4e8;
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const SidebarTitle = styled.h2`
  margin: 0;
  font-size: 18px;
`

export const Input = styled.input`
  width: 100%;
  padding: 9px 10px;
  font: inherit;
  border: 1px solid #c9cdd2;
  border-radius: 6px;

  &:focus {
    outline: 2px solid #91b7ed;
    border-color: #4d86c6;
  }
`

export const PrimaryButton = styled.button`
  padding: 8px 10px;
  font: inherit;
  color: #ffffff;
  cursor: pointer;
  background: #3578c5;
  border: 0;
  border-radius: 6px;

  &:hover {
    background: #2866aa;
  }
`

export const NotesList = styled.ul`
  padding: 0;
  margin: 14px 0 0;
  list-style: none;
`

export const NoteRow = styled.li`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 4px;
`

export const NoteButton = styled.button<{ selected: boolean }>`
  flex: 1;
  min-width: 0;
  padding: 9px;
  overflow: hidden;
  font: inherit;
  color: ${({ selected }) => (selected ? '#174a7f' : '#303030')};
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  background: ${({ selected }) => (selected ? '#dfeeff' : 'transparent')};
  border: 0;
  border-radius: 5px;

  &:hover {
    background: #e9edf2;
  }
`

export const DeleteButton = styled.button`
  padding: 6px 8px;
  font: inherit;
  color: #b33c3c;
  cursor: pointer;
  background: transparent;
  border: 0;
  border-radius: 4px;

  &:hover {
    color: #852727;
    background: #fff0f0;
  }
`

export const EmptyText = styled.p`
  margin: 16px 0 0;
  color: #777777;
  text-align: center;
`

export const Editor = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const EditorTitle = styled.h2`
  margin: 0 0 14px;
  font-size: 20px;
`

export const TextArea = styled.textarea`
  flex: 1;
  min-height: 280px;
  padding: 12px;
  resize: vertical;
  font: inherit;
  line-height: 1.45;
  border: 1px solid #c9cdd2;
  border-radius: 6px;

  &:focus {
    outline: 2px solid #91b7ed;
    border-color: #4d86c6;
  }

  &:disabled {
    cursor: not-allowed;
    background: #f5f5f5;
  }
`
