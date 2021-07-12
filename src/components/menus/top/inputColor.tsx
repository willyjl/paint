import { Tool } from 'models/tool'

type InputColorProps = {
  tool: Tool | undefined
  handleChangeColor: (color: string) => void
}

export const InputColor = ({ tool, handleChangeColor } : InputColorProps) => (
  tool?.lineWidth ? (
    <div className="item">
      <input
        type="color"
        value={tool.color}
        onChange={e => handleChangeColor(e.target.value)}
      />
    </div>
  ) : null
)
