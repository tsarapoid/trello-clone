type Item = {
  id: /*?*/ string
  // text: string
}

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  ids: string
) => {
  return items.findIndex((item: TItem) => item.id === ids)
}

// const itemsWithoutId = [{ text: "test" }]
// findItemIndexById(itemsWithoutId, "testId")
