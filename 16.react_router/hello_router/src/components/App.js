import React, {Component} from 'react'
import {NavLink} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, React Router!</h1>
        <ul>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/repos">repos</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default App