import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import TopNavBar from '../../shared/TopNavBar';
import DropDown from '../../shared/DropDown';

const DiscoverView = (props) => {
  const {
    user,
    showSideNav,
    toggleSideNavigation,
    selectedDataSource,
    dataSourceList,
    changeDataSource
  } = props;

  const moduleName = 'Discover';

  const showSideNavigation = showSideNav ? 'show' : 'hide';
  const contentViewWidth = showSideNav ? 10 : 12;
  const buttonClass = showSideNav ? 'hide' : 'show';

  return (
    <div>
      <TopNavBar titleName={moduleName} />
      <Grid>
        <Row>
          <Col lg={2} md={2} sm={12} xs={12} className={`navigation-view ${showSideNavigation}`}>
            <button onClick={toggleSideNavigation} className="nav-button right">
              <HardwareKeyboardArrowLeft />
            </button>
            <DropDown
              id="data-source"
              title={selectedDataSource}
              name="data-source"
              menuItems={dataSourceList}
              onSelectHandler={changeDataSource}
            />
          </Col>
          <Col lg={contentViewWidth} md={contentViewWidth} sm={12} xs={12} className="content-view">
            <Row>
              <Col lg={12} md={12} sm={12} xs={12} className="chart-container">
                <button onClick={toggleSideNavigation} className={`nav-button left ${buttonClass}`}>
                  <HardwareKeyboardArrowRight />
                </button>
                <div className="chart">
                  Map
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                Data
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default DiscoverView;
