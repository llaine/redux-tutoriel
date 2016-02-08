import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { connectUser } from '../../actions/user';

class Login extends Component {
  constructor() {
    super(...arguments);

  }

  connection(evt) {
    evt.preventDefault();

    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const { dispatch } = this.props;

    dispatch(connectUser(username, password));
  }

  render() {
    const form = (
        <form onSubmit={this.connection.bind(this)}>
          <input type="text" ref="username" placeholder="Username"/> <br/>
          <input type="password" ref="password" placeholder="Mot de passe"/> <br/>
          <button type="submit">Se connecter</button>
        </form>
    );

    const renderForm = () => {
      if(this.props.user.error) {
        return (
            <div>
              <h2>Oops, something wen't wrong ...</h2>
              <p>{this.props.user.error.reason}</p>
              {form}
            </div>
        )
      } else if(this.props.user.fetching_user) {
        return <h2>Loading user ...</h2>

      } else if(this.props.user.connected) {
        return 'Hello user !'
      } else {
        return form
      }

    };

    return (
        <div>
          {renderForm()}
        </div>
    )
  }
}

export default connect(state => ({ user: state.user }))(Login);