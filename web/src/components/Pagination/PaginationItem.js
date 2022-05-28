const PagerItem = ({ text, isCurrent, isClear, handleClick }) => {
  let className = "Pagination-Block-Item";
  let disabled = false;

  if (isClear) {
    className += " Pagination-Block-Item--clear";
  }

  if (isCurrent) {
    className += " Pagination-Block-Item--current";
    disabled = true;
  }

  return (
    <button className={className} disabled={disabled} onClick={handleClick}>
      {text}
    </button>
  );
};

export default PagerItem;
