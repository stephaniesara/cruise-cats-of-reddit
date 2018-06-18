import React, { Component } from "react";
import Post from "./Post.js";

class TopPosts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const posts = this.props.posts;
    return (
      <div className="Top-posts">
        <h3>Top</h3>
        <table>
          <tbody>
            {posts.map((post, index) => (
              <Post
                post={post}
                key={index}
                togglePin={this.props.togglePin}
                state="top"
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TopPosts;
