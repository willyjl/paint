import { connect } from 'react-redux'
import { State } from 'reducers/type'
import { setWidth, setColor } from 'actions'
import { Tool } from 'models/tool'

type TopComponentProps = {
  tool: Tool | undefined,
  setWidth: Function,
  setColor: Function
}

const TopComponent = ({ tool, setWidth, setColor }: TopComponentProps) => (
  <div className="ui top fixed menu">
    <div className="right menu">
      {tool && (
        <div className="item active">
          <i className={`${tool.icon} icon`} />
        </div>
      )}
      {tool?.color && (
        <div className="item">
          <input
            type="color"
            value={tool.color}
            onChange={e => setColor(e.target.value)}
          />
        </div>
      )}
      {tool?.lineWidth && (
        <div className="item">
          <input
            className="slider"
            type="range"
            min="1"
            max="20"
            value={tool.lineWidth}
            onChange={e => setWidth(parseInt(e.target.value, 0))}
          />
          <div className="ui label">
            {tool.lineWidth}px
          </div>
        </div>
      )}
      {false && (
        <>
          <a className="disabled item">
            <i className="undo icon"></i>
          </a>
          <a className="disabled item">
            <i className="redo icon"></i>
          </a>
        </>
      )}
    </div>
  </div>
)

const mapStateToProps = (state: State) => {
  return { tool: state.tools.find(t => t.selected) }
}

export const Top = connect(
  mapStateToProps,
  { setWidth, setColor }
)(TopComponent)
