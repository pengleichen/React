import React, { Component } from 'react'
import Axios from 'axios'
import { chunk } from 'lodash/array'
import User from '../User/User'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstView: false,
      loading: false,
      error: null,
      users: null,
      hasMore: true,
      page: 1
    }

    window.onscroll = this.loadMore
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      firstView: true,
      page: 1,
      users: null
    })
    let { keyword } = nextProps
    this.fetch(keyword, 1)
  }

  fetch(keyword, page) {
    this.setState({
      loading: true
    })
    Axios.get(`https://api.github.com/search/users?q=${keyword}&page=${page}`, {
      transformResponse(data) {
        data = JSON.parse(data)
        return {
          total: data.total_count,
          items: (data.items || []).map(item => {
            return {
              id: item.id,
              name: item.login,
              avatarUrl: item.avatar_url,
              homeUrl: item.html_url
            }
          })
        }
      }
    })
      .then(res => {
        const { total, items } = res.data
        const users = [
          ...(this.state.users || []),
          ...items
        ]
        if (page === 1) {
          this.setState({
            firstView: false
          })
        }
        this.setState({
          loading: false,
          users,
          hasMore: (total > users.length)
        })
      })
      .catch(error => {
        if (page === 1) {
          this.setState({
            firstView: false
          })
        }
        this.setState({
          loading: false,
          error
        })
      })
  }

  render() {
    let { firstView, loading, error, users } = this.state
    let display = loading ? '' : 'none'
    if (firstView) {
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
            {row.map(user => <User key={user.id} {...user} />)}
          </div>
        ))}
        <div style={{display}} className="loading-bar">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  loadMore = () => {
    const {
      state: {
        error,
        loading,
        hasMore,
        page
      },
      props: {
        keyword
      }
    } = this
    if (error || loading || !hasMore) return
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      console.log('loading more ...')
      let nextPage = page + 1
      this.setState({
        page: nextPage
      })
      this.fetch(keyword, nextPage)
    }
  }
}

export default UserList