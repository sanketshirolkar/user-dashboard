import React from "react";
import "./liveUsers.css";
import Table from "../../components/table/Table";
import { tableRows } from "../../components/table/tableRows";

const LiveUsers = () => {
  const data = [
    {
      id: 1,
      email: "snktshirol@gmail.com",
      first_name: "Sanket",
      last_name: "S",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "snktshirol@gmail.com",
      first_name: "Sanket",
      last_name: "S",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 3,
      email: "snktshirol@gmail.com",
      first_name: "Sanket",
      last_name: "S",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 4,
      email: "snktshirol@gmail.com",
      first_name: "Sanket",
      last_name: "S",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 5,
      email: "snktshirol@gmail.com",
      first_name: "Sanket",
      last_name: "S",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 6,
      email: "snktshirol@gmail.com",
      first_name: "Sanket",
      last_name: "S",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
  ];

  return (
    <div className="live_users">
      <Table rows={tableRows} data={data} />
    </div>
  );
};

export default LiveUsers;
