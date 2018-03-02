import swal from 'sweetalert2';
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
      if (!data.isError) {
        swal(
          'User authentication successfull',
          '',
          'success'
        );
        dispatch(loginUserData(data));
        navigateToRoute('/dashboard');
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'User authentication failed !!!',
        });
      }
    } catch (exception) {
      dispatch(loginUserData([]));
    }
  };
};
