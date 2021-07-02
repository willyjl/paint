import { combineReducers } from 'redux'
import { Coordinate } from 'models/coordinate'
import { Tool, Pencil, Eraser } from 'models/tool'

type PaintingMode = {
  isActive: boolean
  prevCoord?: Coordinate | null 
}

type ActionType = {
  type: 'START_PAINTING' |
    'PAINTING' |
    'STOP_PAINTING' |
    'SELECT_TOOL'
  tool: Tool | null
  coord: Coordinate
}

export type State = {
  tools: Tool[]
  selectedTool: Tool
  paintingMode: PaintingMode
}

/** Reducers */

const toolsReducer = (): Tool[] => (
  [ Pencil, Eraser ]
)

const paintingModeReducer = (
  mode: PaintingMode = { isActive: false },
  action: ActionType
) => {
  switch (action.type) {
    case 'START_PAINTING':
      return { isActive: true, prevCoord: action.coord }
    case 'PAINTING':
      return { ...mode, prevCoord: action.coord }
    case 'STOP_PAINTING':
      return { isActive: false }
    default: return mode
  }
}

const selectToolReducer = (selectedTool: null | Tool = null, action: ActionType): null | Tool => {
  if (action.type === 'SELECT_TOOL') {
    return action.tool
  }

  return selectedTool
}

export const reducers = combineReducers({
  tools: toolsReducer,
  selectedTool: selectToolReducer,
  paintingMode: paintingModeReducer
})
