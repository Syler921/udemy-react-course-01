import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

if (module.hot) {
  module.hot.accept();
}

const App = function () {
  return (
    <div className="ui container comments">
        <ApprovalCard>Are you sure you want to do this ? </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="2 days ago  6:00pm"
          post="test 1"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam1"
          timeAgo="1 days ago  3:00pm"
          post="test 2"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam2"
          timeAgo="4 days ago  2:00pm"
          post="test 31"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
