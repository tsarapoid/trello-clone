import type { DragItem } from "./DragItem"

export type Action =
  | {
      type: "ADD_LIST"
      payload: string
    }
  | {
      type: "ADD_TASK"
      payload: { text: string; listId: string }
    }
  | {
      type: "MOVE_LIST"
      payload: {
        draggedId: string
        hoverId: string
      }
    }
  | {
      type: "SET_DRAGGED_ITEM"
      payload: DragItem | null
    }

/*
interface AddListAction {
  type: "ADD_LIST"
  payload: string
}

interface AddTaskAction {
  type: "ADD_LIST"
  payload: { text: string; listId: string }
}

export type Action = AddListAction | AddTaskAction
*/

export const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId,
  },
})

export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
})

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: "MOVE_LIST",
  payload: {
    draggedId,
    hoverId,
  },
})

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem,
})
