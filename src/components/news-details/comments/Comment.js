import React from "react";
import { BsPerson } from "react-icons/bs";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment__info">
        <div className="account-person">
          <BsPerson />
        </div>
        <div className="commented-by">
          <div className="by">{comment.by}</div>
          <div className="date">
            {new Date(comment.time * 1000).toDateString()}
          </div>
        </div>
      </div>
      <div className="comment__text">
        <p>{comment.text} </p>
      </div>
    </div>
  );
};

export default Comment;
