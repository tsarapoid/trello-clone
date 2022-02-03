import { nanoid as nanoID } from "nanoid"

import type { Action } from "./actions"

export type Task = {
  id: string
  text: string
}

export type List = {
  id: string
  text: string
  tasks: Task[]
}

export type AppState = {
  lists: List[]
}

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    //
    case "ADD_LIST": {
      draft.lists.push({
        id: nanoID(),
        text: action.payload,
        tasks: [],
      })
      break
    }

    // ...

    default: {
      break
    }
  }
}

/*
export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoID(), text: action.payload, tasks: [] },
        ],
      }
    }
    default: {
      return state
    }
  }
}
*/