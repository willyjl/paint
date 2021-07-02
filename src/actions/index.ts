import { Tool } from 'models/tool'

export const selectTool = (tool: Tool) => (
  {
    type: 'TOOL_SELECTED',
    payload: tool
  }
)
