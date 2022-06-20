import PageSizer from "./PageSizer";
import Pager from "./Pager";
import "./Pagination.css";

const Pagination = ({
  page,
  pageCount,
  handlePageChange,
  pageSize,
  pageSizeOptions,
  handlePageSizeChange,
}) => {
  const initPageChange = () => handlePageChange(1);

  return (
    <div className="Pagination">
      <Pager page={page} pageCount={pageCount} handlePageChange={handlePageChange} />
      <PageSizer
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        handlePageSizeChange={handlePageSizeChange}
        initPage={initPageChange}
      />
    </div>
  );
};

export default Pagination;
