const PostSummary = (props) => {
  const answerCountItemClassName =
    props.answerCount > 0
      ? "PostSummary-Stats-Item PostSummary-Stats-Item--hasAnswers"
      : "PostSummary-Stats-Item";

  const voteCountLabel = props.voteCount === 1 ? "vote" : "votes";
  const answerCountLabel = props.answerCount === 1 ? "answer" : "answers";
  const viewCountLabel = props.viewCount === 1 ? "view" : "views";

  return (
    <div className="PostSummary">
      <div className="PostSummary-Stats">
        <div className="PostSummary-Stats-Item PostSummary-Stats-Item--emphasized">
          {props.voteCount} {voteCountLabel}
        </div>
        <div className={answerCountItemClassName}>
          {props.answerCount} {answerCountLabel}
        </div>
        <div className="PostSummary-Stats-Item">
          {props.viewCount} {viewCountLabel}
        </div>
      </div>
      <div className="PostSummary-Content">
        <h3 className="PostSummary-Content-Title">
          <a href="/" className="Link">
            {props.title}
          </a>
        </h3>
        <div className="PostSummary-Content-Excerpt">{props.excerpt}</div>
      </div>
    </div>
  );
};

export default PostSummary;
