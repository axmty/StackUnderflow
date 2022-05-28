import PageSizer from "./PageSizer";
import Pager from "./Pager";

const Pagination = ({ page, pageCount, setPage, pageSize, pageSizeOptions, setPageSize }) => {
  return (
    <div className="Pagination">
      <Pager page={page} pageCount={pageCount} setPage={setPage} />
      <PageSizer pageSize={pageSize} pageSizeOptions={pageSizeOptions} setPageSize={setPageSize} />
    </div>
  );
};

export default Pagination;
