import {types} from "./types";

/*
* Type : the action you want to dispatch
* payload : passed data, for this case we don't need to pass data to call the API
* */
export function fetchContactData() {
    return {
        type: types.SEND_REQUEST_GET_ALL_USERS,
        payload: {},
    };
    //this action goes to the saga
}

