import { TopProps } from './types'

export const Top = ({ toolName }: TopProps) => (
  <div className="ui top fixed menu">
    <div className="item">{toolName}</div>
  </div>
)