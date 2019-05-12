import React, {Component} from 'react'

import './CommentItem.css'
class CommentItem extends Component {
  render() {
    let {comment} = this.props
    return (
      <div className="comment-item">
        <button type="button" className="btn btn-outline-danger" onClick={this.remove}>删除</button>
        <blockquote className="blockquote mb-0">
          <p>{comment.content}</p>
          <footer className="blockquote-footer">{comment.author}</footer>
        </blockquote>
      </div>
    )
  }
  remove = () => {
    const {comment} = this.props
    let confirm = window.confirm(`你确认要删除 ${comment.author} 的评论吗？`)
    if (confirm) {
      this.props.remove(comment.id)
    }
  }
}

export default CommentItem