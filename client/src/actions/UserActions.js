import * as types from './types';
import service from '../common/service';
import { getApiUrl } from '../common/appUtils';

const initUsersData = data => ({
  type: types.GET_USERS,
  data
});

export const getUsers = () => async (dispatch) => {
  const url = getApiUrl('users');
  const resp = await service.get(url);
  if (resp) {
    const { data } = resp;
    dispatch(initUsersData(data.responseData));
  } else {
    dispatch(initUsersData([]));
  }
};
