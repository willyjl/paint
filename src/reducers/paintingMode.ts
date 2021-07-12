import { PaintingMode, ActionType } from './type'

export const paintingModeReducer = (
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
