import "./PaginationItem.css";

const PagerItem = ({ text, isCurrent, isClear, handleClick }) => {
  let className = "PaginationItem";
  let disabled = false;

  if (isClear) {
    className += " PaginationItem--clear";
  }

  if (isCurrent) {
    className += " PaginationItem--current";
    disabled = true;
  }

  return (
    <button className={className} disabled={disabled} onClick={handleClick}>
      {text}
    </button>
  );
};

export default PagerItem;
