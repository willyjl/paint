import { Tool } from 'models/tool'

type ActiveIconProps = {
  tool: Tool | undefined
}

export const ActiveIcon = ({ tool } : ActiveIconProps) => (
  tool?.icon ? (
    <div className="item active">
      <i className={`${tool.icon} icon`} />
    </div>
  ) : null
)