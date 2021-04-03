import React from "react";
import ReactDOM from "react-dom";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img
          width="100px"
          height="100px"
          alt="avatar"
          src="https://source.unsplash.com/random"
        ></img>
      </a>

      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.post}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
