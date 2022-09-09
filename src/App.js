import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../src/components/sidebar/Sidebar";
import AddUser from "./views/addUser/AddUser";
import TotalUsers from "./views/totalUsers/TotalUsers";
import LiveUsers from "./views/liveUsers/LiveUsers";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <div className="app_layout">
            <Sidebar/>
            <div className="comp_layout">
              <Routes>
                <Route path="/" element={<AddUser/>} />
                <Route path="/totalUsers" element={<TotalUsers/>} />
                <Route path="/liveUsers" element={<LiveUsers/>} />
              </Routes> 
            </div>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
