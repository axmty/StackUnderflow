import React from "react";

import "./PostSummary.css";

const PostSummary = (props) => (
  <div className="PostSummary">
    <div className="PostSummary-Stats">
      <div className="PostSummary-Stats-Item PostSummary-Stats-Item--emphasized">
        {props.voteCount} votes
      </div>
      <div className="PostSummary-Stats-Item">{props.answerCount} answers</div>
      <div className="PostSummary-Stats-Item">{props.viewCount} views</div>
    </div>
    <div className="PostSummary-Content">
      <h3 className="PostSummary-Content-Title">
        <a href="/" className="Link">
          {props.title}
        </a>
      </h3>
      <div className="PostSummary-Content-Excerpt">{props.excerpt}</div>
    </div>
  </div>
);

export default PostSummary;
