import { createContext, useContext, Dispatch } from "react"
import { ReactNode /* FC */ } from "react"
import { useImmerReducer } from "use-immer"

import type { AppState, List, Task } from "./appStateReducer"
import type { DragItem } from "../types/DragItem"

import { appStateReducer } from "./appStateReducer"
import { Action } from "../types/Actions"

const appData: AppState = {
  //
  draggedItem: null,

  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [
        {
          id: "c0",
          text: "Generate app scaffold",
        },
      ],
    },

    {
      id: "1",
      text: "In Progress",
      tasks: [
        {
          id: "c2",
          text: "Learn Typescript",
        },
      ],
    },

    {
      id: "2",
      text: "Done",
      tasks: [
        {
          id: "c3",
          text: "Begin to use static typing",
        },
      ],
    },
  ],
}

type AppStateContextProps = {
  draggedItem: DragItem | null
  lists: List[]
  getTasksByListId(id: string): Task[]
  dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

type AppStateProviderProps = {
  children: ReactNode
}

// export const AppStateProvider: FC = ({ children }) => {
export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData)
  // const [state, dispatch] = useReducer(appStateReducer, appData)
  const { draggedItem, lists } = state
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || []
  }

  return (
    <AppStateContext.Provider
      value={{
        draggedItem,
        lists,
        getTasksByListId,
        dispatch,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}
