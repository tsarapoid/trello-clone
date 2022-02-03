export type Action =
  | {
      type: "ADD_LIST"
      payload: string
    }
  | {
      type: "ADD_TASK"
      payload: { text: string; listId: string }
    }

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