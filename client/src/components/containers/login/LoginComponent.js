import React from 'react';

import LoginFrom from '../../views/login/LoginForm';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticUser: false,
      loginAttempt: 0
    };
  }

  render() {
    return (
      <LoginFrom
        isAuthenticUser={this.state.isAuthenticUser}
        loginAttempt={this.state.loginAttempt}
      />
    );
  }
}

export default LoginComponent;
