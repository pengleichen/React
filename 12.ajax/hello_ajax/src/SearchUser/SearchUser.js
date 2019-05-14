import React, {Component} from 'react'

class SearchUser extends Component {
  constructor(props) {
    super(props)
    this.searchInputRef = React.createRef()
    this.state = {
      display: true,
      search: true
    }
  }

  render() {
    let {search} = this.state
    let display = this.state.display ? '' : 'none'
    return (
      <div>
        <header className="jumbotron">
          <h1>Search Github Users</h1>
          <div className="row">
            <div className="col-md-4">
              <input type="text" className="form-control" onKeyUpCapture={this.enter} onInput={this.input} ref={this.searchInputRef}/>
            </div>
            <button type="button" className="btn btn-primary" disabled={search} onClick={this.search}>Search</button>
          </div>
        </header>

        <p style={{display}}>Enter name to search</p>
      </div>
    )
  }

  input = (e) => {
    if (e.target.value) {
      this.setState({
        display: false,
        search: false
      })
    } else {
      this.setState({
        display: true,
        search: true
      })
    }
  }
  enter = (e) => {
    e.keyCode === 13 && this.search()
  }
  search = () => {
    this.props.search(this.searchInputRef.current.value)
  }
}

export default SearchUser