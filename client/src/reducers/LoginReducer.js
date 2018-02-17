import * as types from '../actions/types';

const defaultState = {
    users: []
};

const GetUsers = (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_USERS: 
            return {
                ...state,
                users: action.data
            };
        default:
            return state;

    }
}

export default GetUsers;