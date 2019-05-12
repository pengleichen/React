import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import './assets/css/style.css'

let div = document.createElement('div')
div.id = 'app'
document.body.insertBefore(div, document.body.firstChild)

ReactDOM.render(
  <App />
  , document.querySelector('#app')
)

