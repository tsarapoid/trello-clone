// import { ReactNode } from "react"
import { ColumnContainer, ColumnTitle } from "../styles/styles"
import { AddNewItem } from "../newitems/AddNewItem"
import { useAppState } from "../state/AppStateContext"
import { Card } from "./Card"
import { addTask } from "../state/actions"

type ColumnProps = {
  id: string
  text: string
  // children?: ReactNode
}

// export const Column = ({ text, children }: PropsWithChildren<ColumnProps>) => {
// export const Column = ({ text, children }: ColumnProps) => {
export const Column = ({ id, text }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id)

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {/*{children}*/}
      {tasks.map((task) => {
        const { id, text } = task
        return <Card key={id} id={id} text={text} />
      })}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  )
}
