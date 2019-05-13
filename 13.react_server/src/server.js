import React from 'react'
import {renderToString} from 'react-dom/server'
const http = require('http')

import App from './App'

const port = 3000

http.createServer((req, res) => {
  res.writeHeader(200, {'Content-Type': 'text/html;charset=utf-8'})
  const appHTML = renderToString(<App/>)
  res.end(appHTML)
}).listen(port)

console.log(`Server running at http://127.0.0.1:${port}`)