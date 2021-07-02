import { connect } from 'react-redux'
import { State } from 'reducers'
import { selectTool } from 'actions'
import { Tool } from 'models/tool'
import './index.scss'

type SidebarComponentProps = {
  tools: Tool[]
  tool: Tool
  selectTool: Function
}

const SidebarComponent = ({ tools, tool, selectTool }: SidebarComponentProps) => (
  <div id="sidebar" className="ui vertical fixed icon menu">
    {tools.map(t => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        key={t.title}
        className={`item ${t.title === tool?.title && 'active'}`}
        onClick={() => selectTool(t)}
      >
        <i className={`${t.icon} icon`} />
      </a>
    ))}
  </div>
)

const mapStateToProps = (state: State) => (
  {
    tools: state.tools,
    tool: state.selectedTool
  }
)

export const Sidebar = connect(mapStateToProps, { selectTool })(SidebarComponent)
