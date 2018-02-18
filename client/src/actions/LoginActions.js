import * as types from './types';
import service from '../common/service';
import { getApiUrl } from '../common/appUtils';

const initUsersData = data => ({
  type: types.GET_USERS,
  data
});

export const getUsers = (payload) => {
  const url = getApiUrl('users');
  return (dispatch) => {
    service.post(url, payload).then((res) => {
      const { data } = res;
      dispatch(initUsersData(data));
    }).catch((resp) => {
      dispatch(initUsersData([]));
    });
  };
};
