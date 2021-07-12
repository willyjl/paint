import { Tool } from 'models/tool'
import { ActionType } from "./type"

export const selectToolReducer = (
  selectedTool: null | Tool = null,
  action: ActionType
): Tool | null => {
  switch (action.type) {
    case 'SELECT_TOOL':
      return action.tool
    case 'SET_WIDTH':
      const t1 = Object.create(selectedTool)
      t1.lineWidth = action.width
      return t1
    case 'SET_COLOR':
      const tool = Object.create(selectedTool)
      tool.color = action.color
      return tool
    default: return selectedTool
  }
}
