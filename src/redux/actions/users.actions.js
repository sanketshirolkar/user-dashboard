import * as actions from "../actionConstants";

export const requestLiveUsers = () => ({
     type: actions.REQUEST_LIVEUSERS,
});

export const storeLiveUsers = (data) => ({
    type: actions.STORE_LIVEUSERS,
    payload:data
});