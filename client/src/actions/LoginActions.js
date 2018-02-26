import * as types from './types';
import service from '../common/service';
import { getApiUrl } from '../common/appUtils';
import { navigateToRoute } from '../common/appUtils';

const loginUserData = data => ({
  type: types.LOGIN_USER,
  data
});

export const getUserLoginDetails = (payload) => {
  const url = getApiUrl('login');
  return async (dispatch) => {
    try {
      const result = await service.post(url, payload);
      const { data } = result;
      dispatch(loginUserData(data));
      navigateToRoute('/main-dashboard');
    } catch (exception) {
      dispatch(loginUserData([]));
    }
  };
};
