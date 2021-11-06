import { Column } from "./layout/Column"
import { Card } from "./layout/Card"
import { AppContainer } from "./styles/styles"
import { AddNewItem } from "./newitems/AddNewItem"

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  )
}

export { App }
