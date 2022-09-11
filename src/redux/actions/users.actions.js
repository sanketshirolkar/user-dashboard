import * as actions from "../actionConstants";

export const requestLiveUsers = () => ({
     type: actions.REQUEST_LIVEUSERS,
});

export const storeLiveUsers = (data) => ({
    type: actions.STORE_LIVEUSERS,
    payload:data
});

export const storeNewUser = (data) => ({
    type: actions.STORE_NEWUSER,
    payload:data
});

export const increment = () => ({
    type: actions.INCREMENT,
    //payload:data
});
