import React, {Component} from 'react'

class User extends Component {
  render() {
    let {name, homeUrl, avatarUrl} = this.props
    return (
      <div className="col-md-2">
        <a href={homeUrl} target="_blank" rel="noopener noreferrer">
          <div className="card text-center">
            <img src={avatarUrl} className="card-img-top" width="100%" alt="..."/>
            <div className="card-body" style={{padding: 0}}>
              <h6 title={name} className="card-title">{name.length > 9 ? `${name.substr(0, 8)}...` : name}</h6>
            </div>
          </div>
        </a>
      </div>
    )

  }
}

export default User