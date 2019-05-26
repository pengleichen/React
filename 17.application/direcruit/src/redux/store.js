/*
redux最核心的管理对象模块
 */

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reduces from './reducers'

//向外暴露store模块
export default createStore(reduces, composeWithDevTools(applyMiddleware(thunk)))