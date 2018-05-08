import swal from 'sweetalert2';
import * as types from './types';
import service from '../common/service';
import { getApiUrl } from '../common/appUtils';

const initUsersData = data => ({
  type: types.GET_USERS,
  data
});

export const getUsers = () => async (dispatch) => {
  const url = getApiUrl('getAllUsers');
  const resp = await service.get(url);
  if (resp) {
    const { data } = resp;
    swal({
      type: 'success',
      title: 'Greet',
      text: resp.data.message,
    });
    dispatch(initUsersData(data.data));
  } else {
    swal({
      type: 'error',
      title: 'Oops...',
      text: resp.data.data.msg,
    });
    dispatch(initUsersData([]));
  }
};

export const saveUser = payload => async (dispatch) => {
  const url = getApiUrl('saveUser');
  const resp = await service.post(url, payload);
  if (!resp.data.isError) {
    const { data } = resp;
    swal({
      type: 'success',
      title: 'Greet',
      text: resp.data.message,
    });
    dispatch(initUsersData(data.data));
  } else {
    swal({
      type: 'error',
      title: 'Oops...',
      text: resp.data.msg,
    });
    dispatch(initUsersData([]));
  }
};

export const getRoles = () => async (dispatch) => {
  const url = getApiUrl('getAllRoles');
  const resp = await service.get(url);
  if (resp) {
    const { data } = resp;
    dispatch(initUsersData(data.data));
  } else {
    dispatch(initUsersData([]));
  }
};
