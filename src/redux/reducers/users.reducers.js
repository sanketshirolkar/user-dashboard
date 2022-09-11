import * as actions from "../actionConstants";

const initialState = {
    liveUsers: [],
    newUserData: {},
    count:0,
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

const increment = (state, action) =>{
    return {
        ...state, 
        count: state.count + 1,
    }
};


const handlers = {
    [actions.STORE_LIVEUSERS]: storeLiveUsers,
    [actions.STORE_NEWUSER]: storeNewUser,
    [actions.INCREMENT]: increment,
};


const UsersReducer = (state = initialState, action) => {
    const handler = handlers[action.type];
    if(typeof handler === "undefined"){
        return state;
    };

    return handler(state, action);

};

export default UsersReducer;