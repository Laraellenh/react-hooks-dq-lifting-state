import React from "react";
import UserCard from "./UserCard";

function UserList(props) {
  console.log(props)
  return (
    <div className="ui cards">
      {props.users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={props.viewTweets}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;
