import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'

import App from './App'
import './stylesheets/main.scss'

ReactDOM.render(
  // <Provider store={makeStore(history)}>
  <App />,
  // </Provider>,
  document.getElementById('root'),
)
