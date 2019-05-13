import React, {Component} from 'react'
import SearchUser from "../SearchUser/SearchUser";
import UserList from "../UserList/UserList";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  render() {
    let {keyword} = this.state
    return (
      <div className="container">
        <SearchUser search={this.search}/>
        <UserList keyword={keyword}/>
      </div>
    )
  }

  search = (keyword) => {
    this.setState({
      keyword
    })
  }

}

export default App