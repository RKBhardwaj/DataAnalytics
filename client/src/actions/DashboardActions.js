import swal from 'sweetalert2';
import * as types from './types';
import service from '../common/service';
import { getApiUrl } from '../common/appUtils';

export const getDashboards = () => async (dispatch) => {
  const url = getApiUrl('getDashboards');
  const resp = await service.get(url);
  if (resp) {
    const { data } = resp;
    swal({
      type: 'success',
      title: 'Greet',
      text: resp.data.message,
    });
    dispatch({
      type: types.GET_ALL_DASHBOARDS,
      data
    });
  } else {
    swal({
      type: 'error',
      title: 'Oops...',
      text: resp.data.message,
    });
    dispatch({
      type: types.GET_ALL_DASHBOARDS,
      data: []
    });
  }
};

export const saveDashboard = payload => async (dispatch) => {
  const url = getApiUrl('saveDashboard');
  const resp = await service.post(url, payload);
  if (!resp.data.isError) {
    const { data } = resp;
    swal({
      type: 'success',
      title: 'Greet',
      text: resp.data.message,
    });
    dispatch({
      type: types.SAVE_DASHBOARD,
      data
    });
  } else {
    swal({
      type: 'error',
      title: 'Oops...',
      text: resp.data.message,
    });
    dispatch({
      type: types.SAVE_DASHBOARD
    });
  }
};

export const getDashboard = dashboardId => async (dispatch) => {
  const url = getApiUrl('getDashboard');
  const resp = await service.get(`${url}/${dashboardId}`);
  if (!resp.data.isError) {
    const { data } = resp;
    swal({
      type: 'success',
      title: 'Greet',
      text: resp.data.message,
    });
    dispatch({
      type: types.GET_DASHBOARD,
      data
    });
  } else {
    swal({
      type: 'error',
      title: 'Oops...',
      text: resp.data.message,
    });
    dispatch({
      type: types.GET_DASHBOARD
    });
  }
};
