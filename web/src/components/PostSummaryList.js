import React from "react";

import PostSummary from "./PostSummary";

class PostSummaryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://localhost:5001/api/post-summaries")
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return items.map((item) => <PostSummary key={item.postId} {...item} />);
    }
  }
}

export default PostSummaryList;
