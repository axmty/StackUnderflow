import "./App.css";

const PostSummary = () => (
  <div className="PostSummary">
    <div className="PostSummary-Stats">
      <div className="PostSummary-Stats-Item PostSummary-Stats-Item--emphasized">0 votes</div>
      <div className="PostSummary-Stats-Item">0 answers</div>
      <div className="PostSummary-Stats-Item">2 views</div>
    </div>
    <div className="PostSummary-Content">
      <h3 className="PostSummary-Content-Title">
        <a href="/" className="Link">
          how do i get error documentation hint in xcode
        </a>
      </h3>
      <div className="PostSummary-Content-Excerpt">
        I'm watching a tutorial and a question mark shows up by the purple error message with a link
        straight to the docs that answers why. I'm losing what's left of my sanity trying to figure
        out how to turn ...
      </div>
    </div>
  </div>
);

const App = () => (
  <div className="App">
    <PostSummary />
    <PostSummary />
    <PostSummary />
    <PostSummary />
    <PostSummary />
  </div>
);

export default App;
