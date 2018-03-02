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
import ErrorBox from '../../shared/ErrorBox';

const LoginForm = (props) => {
  const {
    isAuthenticUser,
    loginAttempt,
    username,
    password,
    updateLoginDetails,
    submitLoginForm,
    isError,
    errorFields
  } = props;

  return (
    <div className="container">
      <Grid className="login-container">
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h1>Image</h1>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h2>Login</h2>
            <ErrorBox show={isError} fields={errorFields} />
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
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default LoginForm;
