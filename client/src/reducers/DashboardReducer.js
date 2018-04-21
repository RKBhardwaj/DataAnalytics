import * as types from '../actions/types';
import * as defaultProps from './defaultProps';

const defaultState = {
  dash: defaultProps.dashboard,
  dashboardList: defaultProps.dashboardList,
  response: defaultProps.responseObject
};

const DashboardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_ALL_DASHBOARDS:
      return {
        ...state,
        dashboard_list: action.data
      };
    case types.GET_DASHBOARD:
      return {
        ...state,
        dash: action.data
      };
    case types.SAVE_DASHBOARD:
      return {
        ...state,
        response: action.data
      };
    default:
      return state;
  }
};

export default DashboardReducer;
