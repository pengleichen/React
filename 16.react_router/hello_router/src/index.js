import React from 'react'
import {render} from 'react-dom'
import AppRouter from './components/AppRouter'

render(
  (
    <AppRouter/>
  )
  , document.querySelector('#root')
)