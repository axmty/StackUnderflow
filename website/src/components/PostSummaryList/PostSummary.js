const PostSummary = ({
  answerCount,
  voteCount,
  viewCount,
  title,
  excerpt,
  tags,
  hasAcceptedAnswer,
  username,
  userReputationScore,
  lastActivityRelativeTime,
  lastActivityType,
}) => {
  let answerCountItemClassName = "PostSummary-Stats-Item";

  if (answerCount > 0) {
    answerCountItemClassName += " PostSummary-Stats-Item--hasAnswers";
  }

  if (hasAcceptedAnswer) {
    answerCountItemClassName += " PostSummary-Stats-Item--hasAcceptedAnswer";
  }

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
          {hasAcceptedAnswer && (
            <svg aria-hidden="true" className="SvgIcon" width="14" height="14" viewBox="0 0 14 14">
              <path d="M13 3.41 11.59 2 5 8.59 2.41 6 1 7.41l4 4 8-8Z" />
            </svg>
          )}
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
        <div className="PostSummary-Meta">
          <div className="PostSummary-Meta-Tags">
            {tags.map((tag, index) => (
              <a key={index} href="/" className="PostSummary-Meta-Tags-Tag">
                {tag}
              </a>
            ))}
          </div>
          <div className="PostSummary-Meta-AdditionalInformation">
            <div className="PostSummary-Meta-AdditionalInformation-UserInfo">
              <div className="PostSummary-Meta-AdditionalInformation-UserInfo-Username">
                <a href="/" className="Link">
                  {username}
                </a>
              </div>
              <div className="PostSummary-Meta-AdditionalInformation-UserInfo-Username">
                {userReputationScore}
              </div>
            </div>
            <div className="PostSummary-Meta-AdditionalInformation-LastActivity">
              {`${lastActivityType} ${lastActivityRelativeTime}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSummary;
