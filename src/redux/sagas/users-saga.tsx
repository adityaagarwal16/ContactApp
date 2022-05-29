import {put, call, takeEvery } from 'redux-saga/effects';
import {types} from "../actions/types";
import {getAllUsers, getDetailsOfUser} from "../apis/ContactApi";

/*
* function* is a generator function - can be exited and re-entered
* return a generator, not an absolute value, which can be traversed
* here : pause when the API is called
*        Resume when we get the data back
*/

function* getUsers() {
    try {
        //yield pauses the generator function
        const users = yield call(getAllUsers);
        //put resumes the function
        yield put({type: types.SEND_REQUEST_GET_ALL_USERS_SUCCESS, payload: users})
        //this goes to the reducer
    } catch (error) {
        //send the error
        yield put({ type: types.SEND_REQUEST_GET_ALL_USERS_FAILURE, payload: error})
        console.log(error)
    }
}

function* getUserDetails({payload, error}) {
    try {
        //yield pauses the generator function
        const user = yield call(getDetailsOfUser, payload);
        //put resumes the function
        yield put({type: types.SEND_REQUEST_GET_DETAILS_USER_SUCCESS, payload: user})
        //this goes to the reducer
    } catch (error) {
        //send the error
        yield put({ type: types.SEND_REQUEST_GET_DETAILS_USER_FAILURE, payload: error})
        console.log(error)
    }
}


/*this is called from the action*/
export default function* contactSaga() {
    //all actions of these types will trigger a corresponding saga
    yield takeEvery(types.SEND_REQUEST_GET_ALL_USERS, getUsers);
    yield takeEvery(types.SEND_REQUEST_GET_DETAILS_USER, getUserDetails);
}
