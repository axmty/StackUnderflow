import React, { useEffect, useState } from "react";

import PostSummary from "./PostSummary";
import "./PostSummaryList.css";

const PostSummaryList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/post-summaries")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="Content">
        <div className="PostSummaryList">
          {items.map((item) => (
            <PostSummary key={item.postId} {...item} />
          ))}
        </div>

        <div className="Pager">
          <button className="Pager-Item">Prev</button>
          <button className="Pager-Item">1</button>
          <button className="Pager-Item Pager-Item-Current">2</button>
          <button className="Pager-Item">3</button>
          <button className="Pager-Item Pager-Item-Clear">...</button>
          <button className="Pager-Item">1000</button>
          <button className="Pager-Item">Next</button>
        </div>
        <div className="PageSizer"></div>
      </div>
    );
  }
};

export default PostSummaryList;
