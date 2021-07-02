import { connect } from 'react-redux'
import { State } from 'reducers'
import { selectTool } from 'actions'
import { Tool } from 'models/tool'
import './index.scss'

type SidebarComponentProps = {
  tools: Tool[]
  selectTool: Function
}

const SidebarComponent = ({ tools, selectTool }: SidebarComponentProps) => (
  <div id="sidebar" className="ui vertical fixed icon menu">
    {tools.map(tool => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a key={tool.title} className="item" onClick={() => selectTool(tool)}>
        <i className={`${tool.icon} icon`} />
      </a>
    ))}
  </div>
)

const mapStateToProps = (state: State) => ({ tools: state.tools })

export const Sidebar = connect(mapStateToProps, { selectTool })(SidebarComponent)
