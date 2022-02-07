import React from "react";

function UserCard(props) {
 function handleClick(){
  //  props is an ob that contains an obj and our function handleUser
   props.handleUserClick(props.id)
 }

 
  return (
    <div className="card">
      <div className="content">
        <img
          className="right floated mini ui image"
          alt={props.handle}
          src={props.photo}
        />
        <div className="header">{props.handle}</div>
        <div className="description">{props.description}</div>
      </div>
      <button
        onClick ={handleClick}
        
        className="ui bottom attached button"
      >
        <i className="add icon"></i>
        View Tweets
      </button>
    </div>
  );
}

export default UserCard;
