import {createSelector} from "reselect";

const Users = (state) => state.users;

export const getLiveUsersList = createSelector(Users, (data)=> data?.liveUsers || []);