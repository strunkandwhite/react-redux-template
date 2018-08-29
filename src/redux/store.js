import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducer from './root-reducer'

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(createLogger())))
