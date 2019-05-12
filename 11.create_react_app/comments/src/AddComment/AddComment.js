import React, {Component} from 'react'

class AddComment extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="username">用户名</label>
            <input type="text" className="form-control" id="username"
                   placeholder="请输入你的用户名"/>
          </div>
          <div className="form-group">
            <label htmlFor="content">评论内容</label>
            <textarea className="form-control" id="content" rows="7" placeholder="请输入评论内容"/>
          </div>
          <div className="text-right">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddComment