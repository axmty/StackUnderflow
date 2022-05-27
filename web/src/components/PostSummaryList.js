import { useEffect, useState } from "react";

import Pager from "./Pager";
import PostSummary from "./PostSummary";
import "./PostSummaryList.css";

const PostSummaryList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://localhost:5001/api/post-summaries?page=${page}`)
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
  }, [page]);

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

        <Pager page={page} pageSize={15} total={1000} setPage={setPage} />
        <div className="PageSizer"></div>
      </div>
    );
  }
};

export default PostSummaryList;
