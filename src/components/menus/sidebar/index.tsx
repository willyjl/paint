import { connect } from 'react-redux'
import { State } from 'reducers/type'
import { selectTool } from 'actions'
import { Tool } from 'models/tool'
import './index.scss'

type SidebarComponentProps = {
  tools: Tool[]
  selectTool: Function
}

const SidebarComponent = ({ tools, selectTool }: SidebarComponentProps) => (
  <div id="sidebar" className="ui vertical fixed icon menu">
    {tools.map(t => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        key={t.title}
        className={`item ${t.selected && 'active'}`}
        onClick={() => selectTool(t)}
      >
        <i className={`${t.icon} icon`} />
      </a>
    ))}
  </div>
)

const mapStateToProps = (state: State) => ({ tools: state.tools })

export const Sidebar = connect(mapStateToProps, { selectTool })(SidebarComponent)
