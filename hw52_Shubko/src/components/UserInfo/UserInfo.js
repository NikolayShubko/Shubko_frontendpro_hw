import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./UserInfo.css";

const UserInfo = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      setIsLoading(false);
    });
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const renderUsers = () => {
    return (
      <ul className="user-list">
        {users.map((user) => {
          return (
            <li className="user-item" key={uuidv4()}>
              <p className="user-name" key={uuidv4()}>
                {user.name}
              </p>
              <Link
                to={`albums/${user.id}`}
                className="user-link"
                key={uuidv4()}
              >
                Albums
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };
  if (!isLoading) {
    return <>{renderUsers()}</>;
  }

  return <div>Wait a minute</div>;
};

export default UserInfo;
