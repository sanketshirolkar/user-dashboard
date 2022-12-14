import {createSelector} from "reselect";

const Users = (state) => state.users;

export const getLiveUsersList = createSelector(Users, (data)=> data?.liveUsers || []);
export const getAllUsersList = createSelector(Users, (data)=> data?.newUserData || {});
export const getCount = createSelector(Users, (data)=> data?.count || 0);
