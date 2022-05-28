import { useEffect, useState } from "react";

import Pagination from "./Pagination";
import PostSummary from "./PostSummary";
import "./PostSummaryList.css";

const pageSizeOptions = [15, 30, 50];

const PostSummaryList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
  const [total, setTotal] = useState(0);

  const pageCount = Math.ceil(total / pageSize);
  if (pageCount > 0 && page > pageCount) {
    setPage(pageCount);
  }

  useEffect(() => {
    fetch(`https://localhost:5001/api/post-summaries?page=${page}&page_size=${pageSize}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setTotal(1000); //TODO
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          setTotal(0);
        }
      );
  }, [page, pageSize]);

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

        <Pagination
          page={page}
          pageCount={pageCount}
          setPage={setPage}
          pageSize={pageSize}
          pageSizeOptions={pageSizeOptions}
          setPageSize={setPageSize}
        />
      </div>
    );
  }
};

export default PostSummaryList;
