//reducer has an initial state for the store
import {types} from "../actions/types";

const initialState = {
    loading: true,
    users: [],
    error : {}
}

/* takes state and {type, payload} as input*/
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_REQUEST_GET_ALL_USERS:
            //append original state and add new data on top
            return {
                ...state,
                loading: true,
            };
        case types.SEND_REQUEST_GET_ALL_USERS_SUCCESS:
            //append original state and add new data on top
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case types.SEND_REQUEST_GET_ALL_USERS_FAILURE:
            //append original state and add new data on top
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;

    }
};

export default contactReducer;
