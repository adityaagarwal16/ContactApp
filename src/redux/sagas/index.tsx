import {spawn} from 'redux-saga/effects'
import contactSaga from './users-saga'

export default function* rootSaga() {
    /*
    * Any instance of this saga is triggered, then Actions will be called
    * */
    yield spawn(contactSaga)
}
