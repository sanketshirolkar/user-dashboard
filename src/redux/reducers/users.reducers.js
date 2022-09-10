import * as actions from "../actionConstants";

const initialState = {
    liveUsers: []
};

const storeLiveUsers = (state, action) =>{
    return {
        ...state, 
        liveUsers: action.payload,
    }
}

const handlers = {
    [actions.STORE_LIVEUSERS]: storeLiveUsers,
};


const UsersReducer = (state = initialState, action) => {
    const handler = handlers[action.type];
    if(typeof handler === "undefined"){
        return state;
    };

    return handler(state, action);

};

export default UsersReducer;