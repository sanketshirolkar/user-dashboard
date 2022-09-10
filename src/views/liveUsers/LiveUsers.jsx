import React, { useState, useEffect } from "react";
import "./liveUsers.css";
import Table from "../../components/table/Table";
import Input from "../../components/input/Input";
import { tableRows } from "./tableRows";
import { useSelector, useDispatch } from "react-redux";
import { requestLiveUsers } from "../../redux/actions/users.actions";
import { getLiveUsersList } from "../../redux/selectors/users.selector";
import { useCallback } from "react";

const LiveUsers = () => {
  const dispatch = useDispatch();
  const liveUsersList = useSelector(getLiveUsersList);
  const [filteredLiveUsers, setFilteredLiveUsers] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    dispatch(requestLiveUsers());
  }, [dispatch]);

  const handleFilter = useCallback(() => {
    if (liveUsersList?.length > 0) {
      let newData = liveUsersList;
      if (searchKey) {
        newData = liveUsersList?.filter((searchData) => {
          if (
            searchData?.email?.toLowerCase().includes(searchKey.toLowerCase())
          ) {
            return searchData;
          } else if (
            searchData?.first_name
              ?.toLowerCase()
              .includes(searchKey.toLowerCase())
          ) {
            return searchData;
          }
        });
      }
      setFilteredLiveUsers(newData);
    }
  }, [liveUsersList, searchKey]);

  useEffect(() => {
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liveUsersList, searchKey]);

  return (
    <div className="live_users">
      <div className="input_container">
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
        <Table rows={tableRows} data={filteredLiveUsers} />
      </div>
    </div>
  );
};

export default LiveUsers;
