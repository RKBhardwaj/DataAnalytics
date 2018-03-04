import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import ConfigureUsersView from '../../views/configure/ConfigureUsersView';

@connect(store => ({
  loginDetails: store.LoginReducer.loginDetails,
  users: store.UserReducer.users
}))
class ConfigureUsers extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(actions.getUsers());
    this.state = {
      user: props.loginDetails.username,
      columnData: [{
        text: 'Username', title: 'User Name',
      }, {
        text: 'Email', title: 'Email Address'
      }, {
        text: 'Role', title: 'Role'
      }, {
        text: 'Actions', title: 'Actions'
      }],
      tableData: props.usess,
      activeKey: 'user',
      newUser: {
        username: '',
        password: '',
        email: '',
        roles: ''
      }
    };
    this.createNewUser = this.createNewUser.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users !== this.state.tableData) {
      this.setState({
        tableData: nextProps.users
      });
    }
  }

  createNewUser(e) {
    e.preventDefault();
    const newUserObj = {
      username: '',
      password: '',
      email: '',
      roles: ''
    };
    this.setState({
      newUser: newUserObj
    });
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
      <ConfigureUsersView
        user={this.state.user}
        columnData={this.state.columnData}
        tableData={this.state.tableData}
        activeKey={this.state.activeKey}
        handleSelect={this.handleSelect}
        newUser={this.state.newUser}
        createNewUser={this.createNewUser}
      />
    );
  }
}

export default ConfigureUsers;
