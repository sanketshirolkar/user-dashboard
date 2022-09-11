import React, { useState, useEffect, useCallback } from "react";
import "./totalUsers.css";
import Table from "../../components/table/Table";
import Input from "../../components/input/Input";
import { tableRowsData } from "./tableRowsData";
import { useSelector } from "react-redux";
import { getAllUsersList } from "../../redux/selectors/users.selector";

const TotalUsers = () => {
  const allUsersList = useSelector(getAllUsersList);
  const [filteredTotalUsers, setFilteredTotalUsers] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const extractedUserData = Object.values(allUsersList);
  console.log(extractedUserData);

  const handleFilter = useCallback(() => {
    if (extractedUserData?.length > 0) {
      let newData = extractedUserData[0];
      if (searchKey) {
        newData = extractedUserData[0]?.filter((searchData) => {
          if (
            searchData?.email?.toLowerCase().includes(searchKey.toLowerCase())
          ) {
            return searchData;
          } else if (
            searchData?.name?.toLowerCase().includes(searchKey.toLowerCase())
          ) {
            return searchData;
          }
        });
      }
      setFilteredTotalUsers(newData);
      console.log(filteredTotalUsers, "TotalFiler");
    }
  }, [searchKey]);

  useEffect(() => {
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey]);

  return (
    <div className="Total_users">
      <div className="input_containers">
        <Input
          type="text"
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          placeholder="Search"
        />
      </div>
      <div>
        <Table rows={tableRowsData} data={filteredTotalUsers} />
      </div>
    </div>
  );
};

export default TotalUsers;
