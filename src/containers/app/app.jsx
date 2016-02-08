import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
          { this.props.children }
        </div>
    )
  }
}

export default connect(state => ({ user: state.user }))(App);