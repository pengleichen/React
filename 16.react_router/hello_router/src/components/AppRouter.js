import React, {Component} from 'react'
import App from './App'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Repos from './Repos'
import '../asset/css/router.css'
class AppRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [
        {
          path: '/',
          component: App,
          children: [
            {
              path: '/',
              exact: true,
              component: Home
            },
            {
              path: '/about',
              component: About
            },
            {
              path: '/repos',
              component: Repos
            }
          ]
        }

      ]
    }
  }

  render() {
    const {routes} = this.state
    return (
      <Router>
        {
          routes.map(({path, component, children}, index) => <div key={index}>
            <Route {...{path, component}}/>
            <Switch>
              {children.map((route, index) =>
                <Route key={index} {...route} />
              )}
            </Switch>
          </div>)
        }
      </Router>
    )
  }
}

export default AppRouter

/*
<Route path="/" component={App}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/repos" component={Repos}/>
        </Switch>
 */