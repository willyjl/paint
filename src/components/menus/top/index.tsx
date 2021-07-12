import { connect } from 'react-redux'
import { State } from 'reducers/type'
import { setWidth, setColor } from 'actions'
import { Tool } from 'models/tool'
import { ActiveIcon } from './activeIcon'
import { InputColor } from './inputColor'
import { InputWidth } from './inputWidth'

type TopComponentProps = {
  tool: Tool | undefined,
  setWidth: Function,
  setColor: Function
}

const TopComponent = ({ tool, setWidth, setColor }: TopComponentProps) => (
  <div className="ui top fixed menu">
    <div className="right menu">
      <ActiveIcon tool={tool} />
      <InputColor tool={tool} handleChangeColor={color => setColor(color)} />
      <InputWidth tool={tool} handleChangeWidth={width => setWidth(width)} />
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

const mapStateToProps = (state: State) => ({ tool: state.tools.find(t => t.selected) } )

export const Top = connect(
  mapStateToProps,
  { setWidth, setColor }
)(TopComponent)
