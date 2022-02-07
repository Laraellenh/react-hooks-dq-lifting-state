import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  // [variable, setter function] useState imports user as userData and then sets its new variable user to userData
  const [displayUser, setDisplayUser] = useState(users[0])
  console.log(users)
  function viewTweets(userTweets){
    setDisplayUser(users[userTweets -1])
   
  }

  function handleTweetLikes(likes){
    console.log(displayUser.id)
   
   
  }

  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} viewTweets={viewTweets} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList handleTweetLikes={handleTweetLikes} user={displayUser} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
