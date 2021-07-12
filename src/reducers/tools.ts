import { Tool, pencil, eraser } from 'models/tool'

export const toolsReducer = (): Tool[] => {
  return [ pencil, eraser ]
}
