import { useDrag } from "react-dnd"
import { useAppState } from "../state/AppStateContext"

import { setDraggedItem } from "../types/Actions"
import type { DragItem } from "../types/DragItem"

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item))
      return item
    },
    end: () => dispatch(setDraggedItem(null)),
  })
  return { drag }
}
