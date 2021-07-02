import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducers } from 'reducers'
import { App } from 'containers/app'

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      (window as any)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);
