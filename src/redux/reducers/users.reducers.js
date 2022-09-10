import * as actions from "../actionConstants";

const initialState = {
    liveUsers: [],
    newUserData: {},
};

const storeLiveUsers = (state, action) =>{
    return {
        ...state, 
        liveUsers: action.payload,
    }
};

const storeNewUser = (state, action) =>{
    return {
        ...state, 
        newUserData: action.payload,
    }
};



const handlers = {
    [actions.STORE_LIVEUSERS]: storeLiveUsers,
    [actions.STORE_NEWUSER]: storeNewUser,
};


const UsersReducer = (state = initialState, action) => {
    const handler = handlers[action.type];
    if(typeof handler === "undefined"){
        return state;
    };

    return handler(state, action);

};

export default UsersReducer;