import React, {Component} from 'react'
import Axios from 'axios'
import {chunk} from 'lodash/array'
import User from '../User/User'

import './UserList.css'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollHeight: 0,
      loading: false,
      error: null,
      users: null,
      hasMore: true,
      page: 1
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps)
    this.setState({
      loading: true,
      page: 1,
      keyword: nextProps.keyword
    })
    let {keyword} = nextProps
    this.fetch(keyword, 1)
  }

  fetch(keyword, page) {
    Axios.get(`https://api.github.com/search/users?q=${keyword}&page=${page}`, {
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
        let {users} = this.state
        users = users || []
        users.push(...res.data)
        this.setState({
          loading: false,
          users,
          hasMore: res.data.length
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
    let {loading, error, users, scrollHeight} = this.state
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
      <div className="user-list">
        {rows.map((row, index) => (
          <div key={index} className="row mb-md-4">
            {row.map(user => <User key={user.id} {...user}/>)}
          </div>
        ))}
      </div>

    )
  }
  componentDidMount() {
  }

  loadMore = () => {
    let {keyword, hasMore, page} = this.state
    if (!hasMore) {
      return
    }
    if(this.scrollDom.scrollTop + this.scrollDom.clientHeight >= this.scrollDom.scrollHeight){
      this.fetch(keyword, ++page)
    }
  }
}

export default UserList