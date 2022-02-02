import { Column } from "./layout/Column"
// import { Card } from "./layout/Card"
import { AppContainer } from "./styles/styles"
import { AddNewItem } from "./newitems/AddNewItem"
import { AppStateProvider, useAppState } from "./state/AppStateContext"

export const App = () => {
  const { lists } = useAppState()

  return (
    // <AppStateProvider>
    <AppContainer>
      {lists.map((list) => {
        const { id, text } = list
        return <Column key={id} id={id} text={text} />
      })}

      {/* <Column text="To Do">
          <Card text="Generate app scaffold" />
        </Column>
        <Column text="In Progress">
          <Card text="Learn Typescript" />
        </Column>
        <Column text="Done">
          <Card text="Begin to use static typing" />
        </Column> */}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
    // </AppStateProvider>
  )
}
