import _ from 'lodash';
import { apis } from './config';
import history from '../store/history';
import constants from './constants';

export const getImage = (image, ext) => `${constants.common.IMAGES_PATH}${imgName}.${ext}`;

export const getApiUrl = (link, params) => {
    let url = apis[link];
    if (params !== null && params !== undefined) {
        const keys = Object.keys(params);
        _.forEach(keys, (key) => {
            url = url.replace(`:${key}`, params[key]);
        });
    }
    return url;
};