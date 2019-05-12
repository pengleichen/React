import React, {Component} from 'react'

import './CommentItem.css'
class CommentItem extends Component {
  render() {
    let {comment} = this.props
    return (
      <div className="comment-item">
        <blockquote className="blockquote mb-0">
          <p>{comment.content}</p>
          <footer className="blockquote-footer">{comment.author}</footer>
        </blockquote>
      </div>
    )
  }
}

export default CommentItem