import React, {Component, PropTypes} from 'react'
import './styles.css'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        Welcome to App terbaru
        <br />
        <code>
          {this.props.version}
        </code>
      </div>
    )
  }
}

App.propTypes = {
  version: PropTypes.string.isRequired
}
