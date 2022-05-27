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

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={() => {
        setPage(toPage);
      }}
    >
      {text}
    </button>
  );
};

export default PagerItem;
