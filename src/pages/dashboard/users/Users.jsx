import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../redux/actions/admin";
import UserCard from './UserCard';
import "./Users.css"



const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.users);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div className='mainAdm-users'>
      <h2>Users</h2>
      {
        users?.map(user => (
          <UserCard key={user.id} data={user} />
        ))
      }
    </div>
  );
};


export default Users;