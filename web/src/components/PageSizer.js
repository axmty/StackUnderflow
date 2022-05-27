import PaginationItem from "./PaginationItem";

const PageSizer = ({ pageSize, pageSizeOptions, setPageSize }) => {
  const items = pageSizeOptions.map((opt, index) => (
    <PaginationItem
      text={opt}
      isCurrent={pageSize === opt}
      handleClick={() => {
        setPageSize(opt);
      }}
      key={index}
    />
  ));

  return (
    <div className="PageSizer">
      {items}
      <PaginationItem key={pageSizeOptions.length} text="per page" isClear />
    </div>
  );
};

export default PageSizer;
