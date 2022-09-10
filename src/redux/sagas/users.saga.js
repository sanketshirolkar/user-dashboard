import {call, takeLatest, put} from "redux-saga/effects";
import * as actions from "../actionConstants";
import {storeLiveUsers} from "../actions/users.actions";
import { requestLiveUsersAsync } from "../asyncActions/users.async";


function* requestLiveUsers () {
    try{
        const response = yield call(requestLiveUsersAsync); 
            if(response){
                yield put(storeLiveUsers(response?.data?.data));
            }
        }catch(e){
            return e;
    }
}

export function* usersSaga() {
    yield takeLatest(actions.REQUEST_LIVEUSERS, requestLiveUsers);
}