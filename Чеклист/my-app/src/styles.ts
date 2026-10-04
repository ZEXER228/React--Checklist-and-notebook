import styled from '@emotion/styled'

export const Page = styled.main`
  display: grid;
  min-height: 100vh;
  padding: 24px;
  place-items: center;
`

export const TodoCard = styled.section`
  width: 100%;
  max-width: 560px;
  padding: 28px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
`

export const Title = styled.h1`
  margin: 0;
  font-size: 28px;
`

export const Subtitle = styled.p`
  margin: 8px 0 24px;
  color: #6a6a6a;
`

export const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const TextInput = styled.input`
  flex: 1;
  min-width: 0;
  padding: 10px 12px;
  font: inherit;
  border: 1px solid #c9cdd2;
  border-radius: 6px;

  &:focus {
    outline: 2px solid #91b7ed;
    border-color: #4d86c6;
  }
`

export const Button = styled.button`
  padding: 10px 14px;
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

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

export const EmptyText = styled.p`
  margin: 0;
  color: #777777;
  text-align: center;
`

export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e5e5e5;
`

export const TaskText = styled.span<{ done: boolean }>`
  flex: 1;
  overflow-wrap: anywhere;
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  color: ${({ done }) => (done ? '#777777' : '#252525')};
`

export const SmallButton = styled.button`
  padding: 5px 8px;
  font: inherit;
  font-size: 14px;
  color: #3578c5;
  cursor: pointer;
  background: transparent;
  border: 0;
  border-radius: 4px;

  &:hover {
    color: #1f4f86;
    background: #eef4fb;
  }
`

export const DeleteButton = styled(SmallButton)`
  color: #b33c3c;

  &:hover {
    color: #852727;
    background: #fff0f0;
  }
`

export const EditInput = styled(TextInput)`
  padding: 6px 8px;
`
