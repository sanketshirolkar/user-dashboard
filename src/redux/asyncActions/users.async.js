import axios from "axios";

const url = "https://reqres.in/api/users?page=1";

export const requestLiveUsersAsync = () => {
    return axios.get(url);
};