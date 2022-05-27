import PaginationItem from "./PaginationItem";

const PageSizer = ({ pageSize, pageSizeOptions, setPageSize }) => {
  const items = pageSizeOptions.map((opt) => (
    <PaginationItem
      text={opt}
      isCurrent={pageSize === opt}
      handleClick={() => {
        setPageSize(opt);
      }}
    />
  ));

  return (
    <div className="PageSizer">
      {items}
      <PaginationItem text="per page" isClear />
    </div>
  );
};

export default PageSizer;
