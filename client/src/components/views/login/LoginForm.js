import React from 'react';
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonGroup,
  Button
} from 'react-bootstrap';

const LoginForm = (props) => {
  const {
    isAuthenticUser,
    loginAttempt,
    username,
    password,
    updateLoginDetails,
    submitLoginForm,
    isError
  } = props;

  return (
    <div className="container">
      <div className="login-container">
        <h2>Login</h2>
        <Form onSubmit={submitLoginForm}>
          <FormGroup htmlFor="username">
            <ControlLabel>User Name</ControlLabel>
            <FormControl
              type="text"
              id="usename"
              name="username"
              value={username}
              placeholder="Username"
              autoComplete="off"
              onChange={evt => updateLoginDetails(evt)}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel htmlFor="password">Password</ControlLabel>
            <FormControl
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              autoComplete="off"
              onChange={evt => updateLoginDetails(evt)}
            />
          </FormGroup>
          <ButtonGroup>
            <Button
              type="submit"
              className="btn-primary"
            >
              Login
            </Button>
            <Button
              type="reset"
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
