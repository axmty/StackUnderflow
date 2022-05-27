import PaginationItem from "./PaginationItem";

const Pager = ({ page, pageCount, setPage }) => {
  const items = [];

  const handleClickToPage = (toPage) => {
    return () => setPage(toPage);
  };

  if (page > 1) {
    items.push(
      <PaginationItem text="Prev" key={items.length} handleClick={handleClickToPage(page - 1)} />
    );
  }

  const firstSurroundingPage = Math.max(1, page - 2);
  const lastSurroundingPage = Math.min(pageCount, page + 2);

  if (firstSurroundingPage > 1) {
    items.push(<PaginationItem text="1" key={items.length} handleClick={handleClickToPage(1)} />);
  }

  if (firstSurroundingPage > 2) {
    items.push(<PaginationItem text="..." key={items.length} isClear />);
  }

  for (
    let currPageItem = firstSurroundingPage;
    currPageItem <= lastSurroundingPage;
    currPageItem++
  ) {
    items.push(
      <PaginationItem
        text={currPageItem}
        key={items.length}
        isCurrent={currPageItem === page}
        handleClick={handleClickToPage(currPageItem)}
      />
    );
  }

  if (lastSurroundingPage < pageCount - 1) {
    items.push(<PaginationItem text="..." key={items.length} isClear />);
  }

  if (lastSurroundingPage < pageCount) {
    items.push(
      <PaginationItem
        text={pageCount}
        key={items.length}
        handleClick={handleClickToPage(pageCount)}
      />
    );
  }

  if (page < pageCount) {
    items.push(
      <PaginationItem text="Next" key={items.length} handleClick={handleClickToPage(page + 1)} />
    );
  }

  return <div className="Pager">{items}</div>;
};

export default Pager;
