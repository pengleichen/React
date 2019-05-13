import React, {Component} from 'react'
import Axios from 'axios'
import {chunk} from 'lodash/array'
import User from '../User/User'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: null,
      users: null
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      loading: true
    })
    let {keyword} = nextProps.keyword
    Axios.get(`https://api.github.com/search/users?q=${keyword}`, {
      transformResponse(data) {
        data = JSON.parse(data)
        return data.items.map(item => {
          return {
            id: item.id,
            name: item.login,
            avatarUrl: item.avatar_url,
            homeUrl: item.html_url
          }
        })
      }
    })
      .then(res => {
        this.setState({
          loading: false,
          users: res.data
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        })
      })
  }

  render() {
    let {loading, error, users} = this.state
    if (loading) {
      return (
        <h3>Loading ...</h3>
      )
    } else if (error) {
      return (
        <div>{error.toString()}</div>
      )
    } else if (users && !users.length) {
      return <div>No records can be found.</div>
    }

    let rows = chunk(users, 6)
    return (
      <div>
        {rows.map((row, index) => (
          <div key={index} className="row mb-md-4">
            {row.map(user => <User key={user.id} {...user}/>)}
          </div>
        ))}
      </div>

    )
  }
}

export default UserList