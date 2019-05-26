import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'
import Repo from './Repo'

class Repos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [
        {
          repo: 'yarn',
          user: 'facebook'
        },
        {
          repo: 'react',
          user: 'facebook'
        },
        {
          repo: 'angular',
          user: 'google'
        },
        {
          repo: 'antd',
          user: 'antd'
        }
      ]
    }
  }

  render() {
    const {repos} = this.state
    return (
      <div>
        Repos组件
        <ul>
          {
            repos.map(repo => <li key={repo.repo}>
              <NavLink to={`/repos/${repo.user}/${repo.repo}`}>
                {repo.repo}
              </NavLink>
            </li>)
          }
        </ul>
        <Route path="/repos/:user/:repo" component={Repo}/>
      </div>
    )
  }
}

export default Repos