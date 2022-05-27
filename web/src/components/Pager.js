import PagerItem from "./PagerItem";

const Pager = ({ page, pageSize, total, setPage }) => {
  const pageCount = Math.ceil(total / pageSize);
  const items = [];

  if (page > 1) {
    items.push(<PagerItem text="Prev" key={items.length} setPage={setPage} toPage={page - 1} />);
  }

  const firstSurroundingPage = Math.max(1, page - 2);
  const lastSurroundingPage = Math.min(pageCount, page + 2);

  if (firstSurroundingPage > 1) {
    items.push(<PagerItem text="1" key={items.length} setPage={setPage} toPage={1} />);

    if (firstSurroundingPage > 2) {
      items.push(<PagerItem key={items.length} isClear />);
    }
  }

  for (let currPage = firstSurroundingPage; currPage <= lastSurroundingPage; currPage++) {
    items.push(
      <PagerItem
        text={currPage}
        key={items.length}
        isCurrent={currPage === page}
        setPage={setPage}
        toPage={currPage}
      />
    );
  }

  if (lastSurroundingPage < pageCount) {
    if (lastSurroundingPage < pageCount - 1) {
      items.push(<PagerItem key={items.length} isClear />);
    }

    items.push(
      <PagerItem text={pageCount} key={items.length} setPage={setPage} toPage={pageCount} />
    );
  }

  if (page < pageCount) {
    items.push(<PagerItem text="Next" key={items.length} setPage={setPage} toPage={page + 1} />);
  }

  return <div className="Pager">{items}</div>;
};

export default Pager;
