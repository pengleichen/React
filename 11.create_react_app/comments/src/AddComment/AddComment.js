import React, { Component } from 'react'

import Comment from '../Comment'

class AddComment extends Component {
  constructor(props) {
    super(props)
    this.initRefs()
  }
  initRefs = () => {
    this.usernameRef = React.createRef()
    this.contentRef = React.createRef()
  }
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="username">用户名</label>
            <input type="text" className="form-control" id="username" ref={this.usernameRef}
              placeholder="请输入你的用户名" />
          </div>
          <div className="form-group">
            <label htmlFor="content">评论内容</label>
            <textarea className="form-control" id="content" rows="7" ref={this.contentRef}
              placeholder="请输入评论内容" />
          </div>
          <div className="text-right">
            <button type="button" className="btn btn-primary" onClick={this.add}>提交</button>
          </div>
        </form>
      </div>
    )
  }
  add = () => {
    const username = this.usernameRef.current.value
    const content = this.contentRef.current.value
    if (!username || !content ) {
      alert('无效的评论')
      return
    }
    let comment = new Comment({author: username, content})
    this.props.add(comment)
    this.usernameRef.current.value = ''
    this.contentRef.current.value = ''
  }
}

export default AddComment