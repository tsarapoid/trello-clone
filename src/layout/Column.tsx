import { ReactNode } from "react"
import { ColumnContainer, ColumnTitle } from "../styles/styles"
import { AddNewItem } from "../newitems/AddNewItem"

type ColumnProps = {
  text: string
  children?: ReactNode
}

// export const Column = ({ text, children }: PropsWithChildren<ColumnProps>) => {
export const Column = ({ text, children }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  )
}
