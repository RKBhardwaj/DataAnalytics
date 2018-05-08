import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import ConfigureUsersView from './views/ConfigureUsersView';

@connect(store => ({
  loginDetails: store.LoginReducer.loginDetails,
  users: store.UserReducer.users
}))
class ConfigureUsers extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(actions.getUsers());
    this.props.dispatch(actions.getRoles());
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
      userDetails: {
        username: '',
        password: '',
        email: '',
        roles: ''
      }
    };
    this.createNewUser = this.createNewUser.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.changeUserDetails = this.changeUserDetails.bind(this);
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
    const detailsObj = this.state.userDetails;
    if (detailsObj.username !== '' && detailsObj.password !== '' && detailsObj.email !== ''
      && detailsObj.roles !== '') {
      this.props.dispatch(actions.saveUser(detailsObj));
      this.setState({
        userDetails: {
          username: '',
          password: '',
          email: '',
          roles: ''
        }
      });
    }
  }

  changeUserDetails(e) {
    const { name, value } = e.target;
    const detailsObj = this.state.userDetails;
    detailsObj[name] = value;
    this.setState({
      userDetails: detailsObj
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
        userDetails={this.state.userDetails}
        createNewUser={this.createNewUser}
        changeUserDetails={this.changeUserDetails}
      />
    );
  }
}

export default ConfigureUsers;
