import * as types from './types';
import service from '../common/service';
import { getApiUrl } from '../common/appUtils';

const loginUserData = data => ({
  type: types.LOGIN_USER,
  data
});

export const getUserLoginDetails = payload => async (dispatch) => {
  const url = getApiUrl('login');
  try {
    const result = await service.post(url, payload);
    const { data } = result;
    dispatch(loginUserData(data));
  } catch (exception) {
    dispatch(loginUserData([]));
  }
};
