import { connect } from 'react-redux'
import { State } from 'reducers'
import { Tool } from 'models/tool'

type TopComponentProps = {
  tool: Tool
}

const TopComponent = ({ tool }: TopComponentProps) => (
  <div className="ui top fixed menu">
    {tool && <div className="item">{tool.title}</div>}
  </div>
)

const mapStateToProps = (state: State) => {
  return { tool: state.selectedTool }
}

export const Top = connect(mapStateToProps)(TopComponent)
