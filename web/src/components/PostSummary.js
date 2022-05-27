import "./PostSummary.css";

const PostSummary = (props) => {
  const answerCountItemClassName =
    props.answerCount > 0
      ? "PostSummary-Stats-Item PostSummary-Stats-Item--hasAnswers"
      : "PostSummary-Stats-Item";

  const answerCountItemLabel = props.answerCount === 1 ? "answer" : "answers";

  return (
    <div className="PostSummary">
      <div className="PostSummary-Stats">
        <div className="PostSummary-Stats-Item PostSummary-Stats-Item--emphasized">
          {props.voteCount} votes
        </div>
        <div className={answerCountItemClassName}>
          {props.answerCount} {answerCountItemLabel}
        </div>
        <div className="PostSummary-Stats-Item">{props.viewCount} views</div>
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
