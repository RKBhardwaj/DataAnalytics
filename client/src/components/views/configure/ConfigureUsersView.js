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
import Header from '../../shared/Header';
import TopNavBar from '../../shared/TopNavBar';
import DataGrid from '../../shared/DataGrid';

const ConfigureUsersView = (props) => {
  const {
    user,
    columnData,
    tableData,
    createNewUser,
    activeKey,
    handleSelect
  } = props;

  const moduleName = 'Users and Roles';
  const updatedTableData = tableData || [];

  return (
    <div>
      <Header loggedInUser={user} />
      <TopNavBar titleName={moduleName} />
      <Tabs activeKey={activeKey} onSelect={handleSelect} id="user-roles">
        <Tab eventKey="user" title="Users">
          <Grid>
            <Row>
              <Col lg={8} md={8} sm={12} xs={12}>
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
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Role</ControlLabel>
                    <FormControl
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </FormGroup>
                  <ButtonGroup>
                    <Button type="submit" className="btn-primary">Save</Button>
                    <Button type="reset">Cancel</Button>
                  </ButtonGroup>
                </Form>
              </Col>
            </Row>
          </Grid>
        </Tab>
        <Tab eventKey="role" title="Roles">
          Tab 2 Content
        </Tab>
      </Tabs>
    </div>
  );
};

export default ConfigureUsersView;
