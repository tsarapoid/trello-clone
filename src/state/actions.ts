export type Action =
  | {
      type: "ADD_LIST"
      payload: string
    }
  | {
      type: "ADD_TASK"
      payload: { text: string; listID: string }
    }

export const addTask = (text: string, listID: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listID,
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
  payload: { text: string; listID: string }
}

export type Action = AddListAction | AddTaskAction
*/
