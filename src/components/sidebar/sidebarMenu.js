import AddUser from "../../views/addUser/AddUser";
import TotalUsers from "../../views/totalUsers/TotalUsers";
import LiveUsers from "../../views/liveUsers/LiveUsers";
import addUserLogo from "../../assets/logo/add_user.png";
import totalUsersLogo from "../../assets/logo/total_users.png"
import liveUsersLogo from "../../assets/logo/live_users.png"

export const sidebarMenuItems = [
    {
        path:"/",
        name:"Add User",
        logo:addUserLogo,
        component: AddUser,
    },
    {
        path:"/totalUsers",
        name:"Total Users",
        logo:totalUsersLogo,
        component: TotalUsers,
    },
    {
        path:"/liveUsers",
        name:"Live Users",
        logo:liveUsersLogo,
        component: LiveUsers,
    },
];