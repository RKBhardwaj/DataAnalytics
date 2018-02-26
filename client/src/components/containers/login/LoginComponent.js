import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginFrom from '../../views/login/LoginForm';
import { getUserLoginDetails } from '../../../actions/LoginActions';

@connect(store => ({
  loginDetails: store.LoginReducer.loginDetails
}))
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticUser: false,
      loginAttempt: 0,
      loginDetails: props.loginDetails,
      isError: false
    };

    this.updateLoginDetails = this.updateLoginDetails.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  updateLoginDetails(e) {
    const { name, value } = e.target;
    const loginObj = this.state.loginDetails;
    loginObj[name] = value;
    this.setState({
      loginDetails: loginObj,
      isError: false
    });
  }

  submitLoginForm(e) {
    e.preventDefault();
    const { username, password } = this.state.loginDetails;
    if (username !== '' && password !== '') {
      this.setState({
        isError: false
      });
      this.props.dispatch(getUserLoginDetails({ username, password }));
    } else {
      this.setState({
        isError: true
      });
    }
  }

  render() {
    return (
      <LoginFrom
        isAuthenticUser={this.state.isAuthenticUser}
        loginAttempt={this.state.loginAttempt}
        loginDetails={this.state.loginDetails}
        isError={this.state.isError}
        updateLoginDetails={this.updateLoginDetails}
        submitLoginForm={this.submitLoginForm}
      />
    );
  }
}

export default LoginComponent;
