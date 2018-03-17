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
  Button,
  Tabs,
  Tab
} from 'react-bootstrap';
import TopNavBar from '../../../../shared/TopNavBar';
import DataGrid from '../../../../shared/DataGrid';

const ConfigureUsersView = (props) => {
  const {
    user,
    columnData,
    tableData,
    createNewUser,
    activeKey,
    handleSelect,
    userDetails,
    changeUserDetails
  } = props;

  const {
    username,
    password,
    email,
    roles
  } = userDetails;

  const moduleName = 'Users and Roles';
  const updatedTableData = tableData || [];

  return (
    <div>
      <TopNavBar titleName={moduleName} />
      <Grid>
        <Row id="user-roles">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Tabs activeKey={activeKey} onSelect={handleSelect} id="user-roles">
              <Tab eventKey="user" title="Users">
                <Row>
                  <Col lg={8} md={8} sm={12} xs={12}>
                    <h3>All Users</h3>
                    {
                      updatedTableData.length !== 0 ?
                        <DataGrid columnData={columnData} tableData={updatedTableData} /> :
                        ''
                    }
                  </Col>
                  <Col lg={4} md={4} sm={12} xs={12}>
                    <h3>Create new user</h3>
                    <Form onSubmit={createNewUser}>
                      <FormGroup>
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={username}
                          onChange={evt => changeUserDetails(evt)}
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={evt => changeUserDetails(evt)}
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={evt => changeUserDetails(evt)}
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <ControlLabel>Role</ControlLabel>
                        <FormControl
                          type="text"
                          name="roles"
                          placeholder="Role"
                          value={roles}
                          onChange={evt => changeUserDetails(evt)}
                          required
                        />
                      </FormGroup>
                      <ButtonGroup>
                        <Button type="submit" className="btn-primary">Save</Button>
                        <Button type="reset" className="btn-danger">Cancel</Button>
                      </ButtonGroup>
                    </Form>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="role" title="Roles">
                Tab 2 Content
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default ConfigureUsersView;
