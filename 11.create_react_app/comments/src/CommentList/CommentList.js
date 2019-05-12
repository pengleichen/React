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
              <div className="alert alert-danger" role="alert"
                   style={{display: comments.length ? 'none' : ''}}>
                目前无任何评论！
              </div>
            {
              comments.map(item => <CommentItem key={item.id} comment={item} remove={this.props.remove}/>)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default CommentList