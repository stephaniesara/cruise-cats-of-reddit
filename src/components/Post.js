import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, permalink } = this.props.post.data;
    const link = `http://reddit.com/${permalink}`;
    return (
      <div className="Post">
        <a href={link} target="_blank">
          {title}
        </a>
      </div>
    );
  }
}

export default Post;
