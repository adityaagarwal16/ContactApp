import {types} from "./types";

/*
* Type : the action you want to dispatch
* payload : passed data, for this case we don't need to pass data to call the API
* */
export function fetchDetailsData(data) {
    return {
        type: types.SEND_REQUEST_GET_DETAILS_USER,
        payload: data,
    };
    //this action goes to the saga
}

