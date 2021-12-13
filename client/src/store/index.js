import { createStore , applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducers from "../reducers"

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))