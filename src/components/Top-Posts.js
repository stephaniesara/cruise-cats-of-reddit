import React, { Component } from "react";
import Post from "./Post.js";

class TopPosts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const posts = this.props.posts;
    return (
      <div className="Top-posts">
        <ol>
          {posts.map((post, index) => (
            <li>
              <Post post={post} key={index} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default TopPosts;
