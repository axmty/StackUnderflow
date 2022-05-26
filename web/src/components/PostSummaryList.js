import React, { useEffect, useState } from "react";

import PostSummary from "./PostSummary";

export default () => {
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
      <div className="PostSummaryList">
        {items.map((item) => (
          <PostSummary key={item.postId} {...item} />
        ))}
      </div>
    );
  }
};
