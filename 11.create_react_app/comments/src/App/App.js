import React from 'react'

import PubSub from 'pubsub-js'

import {maxBy} from 'lodash/math'
import {remove} from 'lodash/array'
import AddComment from '../AddComment/AddComment'
import CommentList from '../CommentList/CommentList'

import data from '../Data'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(data.Comments.get())
    this.state = {
      comments: data.Comments.get()
    }
  }

  // 组件将要被渲染的时候进行订阅
  componentWillMount() {
    PubSub.subscribe('removeComment', (msg, id) => this.removeComment(id))
  }

  render() {
    const {comments} = this.state
    return (
      <div>
        <header className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <AddComment add={this.addComment}/>
            </div>
            <div className="col-md-8">
              {
                // 使用props
                // <CommentList comments={comments} remove={this.removeComment}/>

                // 使用PubSub
                <CommentList comments={comments}/>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  addComment = (comment) => {
    let {comments} = this.state
    comment.id = ((maxBy(comments, (o) => o.id) || {}).id || 0) + 1
    comments.unshift(comment)
    this.setState({
      comments
    })
    data.Comments.set(comments)
  }
  removeComment = (id) => {
    let comments = remove(this.state.comments, (item) => item.id !== id)
    this.setState({
      comments
    })
    data.Comments.set(comments)
  }
}

export default App;
