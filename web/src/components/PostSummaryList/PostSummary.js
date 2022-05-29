const PostSummary = ({ answerCount, voteCount, viewCount, title, excerpt, tags }) => {
  const answerCountItemClassName =
    answerCount > 0
      ? "PostSummary-Stats-Item PostSummary-Stats-Item--hasAnswers"
      : "PostSummary-Stats-Item";

  const voteCountLabel = voteCount === 1 ? "vote" : "votes";
  const answerCountLabel = answerCount === 1 ? "answer" : "answers";
  const viewCountLabel = viewCount === 1 ? "view" : "views";

  return (
    <div className="PostSummary">
      <div className="PostSummary-Stats">
        <div className="PostSummary-Stats-Item PostSummary-Stats-Item--emphasized">
          {voteCount} {voteCountLabel}
        </div>
        <div className={answerCountItemClassName}>
          {answerCount} {answerCountLabel}
        </div>
        <div className="PostSummary-Stats-Item">
          {viewCount} {viewCountLabel}
        </div>
      </div>
      <div className="PostSummary-Content">
        <h3 className="PostSummary-Content-Title">
          <a href="/" className="Link">
            {title}
          </a>
        </h3>
        <div className="PostSummary-Content-Excerpt">{excerpt}</div>
        <div className="PostSummary-Meta-Tags">
          {tags.map((tag, index) => (
            <a key={index} href="/" className="PostSummary-Meta-Tags-Tag">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostSummary;
