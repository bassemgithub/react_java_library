import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/users').then(function (response) {
       // handle success
       setUsers(response.data);
       console.log("use effect in boook context", response.data);
       console.log("users ",  users);
     })
 }, []);
  return (
    <UserContext.Provider value={{ users }}>
      {props.children}
    </UserContext.Provider>
  );
}
 
export default UserContextProvider;