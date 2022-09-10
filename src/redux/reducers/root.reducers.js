import { combineReducers } from "redux";
import Users from "./users.reducers";


const reducers = combineReducers({
  users: Users
});
export default reducers;