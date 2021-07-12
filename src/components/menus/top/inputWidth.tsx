import { Tool } from 'models/tool'

type InputWidthProps = {
  tool: Tool | undefined
  handleChangeWidth: (width: number) => void
}

export const InputWidth = ({ tool, handleChangeWidth }: InputWidthProps) => (
  tool?.lineWidth ? (
    <div className="item">
      <input
        className="slider"
        type="range"
        min="1"
        max="20"
        value={tool.lineWidth}
        onChange={e => handleChangeWidth(parseInt(e.target.value, 0))}
      />
      <div className="ui label">
        {tool.lineWidth}px
      </div>
    </div>
  ) : null
)