import { ActionType } from './type'
import { Tool, pencil, eraser } from 'models/tool'

export const toolsReducer = (
  tools: Tool[] = [pencil, eraser],
  action: ActionType
): Tool[] => {
  switch(action.type) {
    case 'SELECT_TOOL':
      console.log('select tool', action.tool)
      return tools.map(t => 
        Object.assign(
          Object.create(t),
          { selected: t.title === action.tool.title }
        )
      )
    case 'SET_WIDTH':
      return tools.map(t =>
        t.selected ?
          Object.assign(
            Object.create(t),
            { lineWidth: action.width }
          ) : t
      )
    case 'SET_COLOR':
      return tools.map(t =>
        t.selected ?
          Object.assign(
            Object.create(t),
            { color: action.color }
          ) : t
      )
    default: return tools
  }
}
