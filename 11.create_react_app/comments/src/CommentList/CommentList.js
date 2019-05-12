import React, {Component} from 'react'
import CommentItem from '../CommentItem/CommentItem'

class CommentList extends Component {
  render() {
    let {comments} = this.props
    return (
      <div>
        <div className="card">
          <div className="card-header">
            评论回复
          </div>
          <div className="card-body">
            {comments.map(item => <CommentItem key={item.id} comment={item}/>)}
          </div>
        </div>
      </div>
    )
  }
}

export default CommentList