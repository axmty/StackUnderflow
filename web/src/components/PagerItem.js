import "./PagerItem.css";

const PagerItem = ({ text, isCurrent, isClear, setPage, toPage }) => {
  let className = "Pager-Item";
  let disabled = false;

  if (isClear) {
    className += " Pager-Item--clear";
    text = "...";
  }

  if (isCurrent) {
    className += " Pager-Item--current";
    disabled = true;
  }

  const handleClick = isClear
    ? undefined
    : () => {
        setPage(toPage);
      };

  return (
    <button className={className} disabled={disabled} onClick={handleClick}>
      {text}
    </button>
  );
};

export default PagerItem;
