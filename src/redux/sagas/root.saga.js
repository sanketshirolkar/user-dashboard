import {all, fork} from "redux-saga/effects";
import * as users from "./users.saga";

export default function* rootSaga () {
    yield all(
        [...Object.values(users)].map(fork)
    );
};