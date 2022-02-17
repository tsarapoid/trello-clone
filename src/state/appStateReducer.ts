import { nanoid as nanoId } from "nanoid"

import type { Action } from "../types/Actions"
import type { DragItem } from "../types/DragItem"

import { findItemIndexById, moveItem } from "../utils/arrayUtils"

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
  draggedItem: DragItem | null
}

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    //
    case "ADD_LIST": {
      draft.lists.push({
        id: nanoId(),
        text: action.payload,
        tasks: [],
      })
      break
    }

    case "ADD_TASK": {
      const { text, listId } = action.payload
      const targetListIndex = findItemIndexById(draft.lists, listId)
      draft.lists[targetListIndex].tasks.push({
        id: nanoId(),
        text,
      })
      break
    }

    case "MOVE_LIST": {
      const { draggedId, hoverId } = action.payload
      const dragIndex = findItemIndexById(draft.lists, draggedId)
      const hoverIndex = findItemIndexById(draft.lists, hoverId)
      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex)
      break
    }

    case "SET_DRAGGED_ITEM": {
      draft.draggedItem = action.payload
      break
    }

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
          { id: nanoId(), text: action.payload, tasks: [] },
        ],
      }
    }
    default: {
      return state
    }
  }
}
*/
