import { combineReducers } from 'redux'
import { Tool } from 'models/tool'

type ToolAction = {
  type: 'TOOL_SELECTED'
  payload: Tool
}

export type State = {
  tools: Tool[]
  selectedTool: Tool
}

const toolsReducer = (): Tool[] => (
  [
    { title: 'brush', icon: 'pencil' },
    { title: 'eraser', icon: 'eraser' }
  ]
)

const selectedToolReducer = (selectedTool: null | Tool = null, action: ToolAction): null | Tool => {
  if (action.type === 'TOOL_SELECTED') {
    return action.payload
  }

  return selectedTool
}

export const reducers = combineReducers({
  tools: toolsReducer,
  selectedTool: selectedToolReducer
})
