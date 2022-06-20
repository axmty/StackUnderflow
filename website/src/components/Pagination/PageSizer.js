import PaginationItem from "./PaginationItem";

const PageSizer = ({ pageSize, pageSizeOptions, handlePageSizeChange, initPage }) => {
  const items = pageSizeOptions.map((pageSizeOption, index) => (
    <PaginationItem
      text={pageSizeOption}
      isCurrent={pageSize === pageSizeOption}
      handleClick={() => {
        initPage();
        handlePageSizeChange(pageSizeOption);
      }}
      key={index}
    />
  ));

  return (
    <div className="Pagination-Block Pagination-Block--right">
      {items}
      <PaginationItem key={pageSizeOptions.length} text="per page" isClear />
    </div>
  );
};

export default PageSizer;
