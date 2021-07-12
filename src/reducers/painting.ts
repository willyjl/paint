import { PaintingState, ActionType } from './type'

export const paintingReducer = (
  painting: PaintingState = { isActive: false },
  action: ActionType
) => {
  switch (action.type) {
    case 'START_PAINTING':
      return { isActive: true, prevCoord: action.coord }
    case 'PAINTING':
      return { ...painting, prevCoord: action.coord }
    case 'STOP_PAINTING':
      return { isActive: false }
    default: return painting
  }
}
