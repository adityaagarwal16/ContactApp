//reducer has an initial state for the store
import {types} from "../actions/types";

const initialState = {
    loading: true,
    user: {},
    error : {}
}

/* takes state and {type, payload} as input*/
const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_REQUEST_GET_DETAILS_USER:
            //append original state and add new data on top
            return {
                ...state,
                loading: true,
            };
        case types.SEND_REQUEST_GET_DETAILS_USER_SUCCESS:
            //append original state and add new data on top
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case types.SEND_REQUEST_GET_DETAILS_USER_FAILURE:
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

export default userDetailsReducer;
