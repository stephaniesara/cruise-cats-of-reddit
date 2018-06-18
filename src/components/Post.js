import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, permalink } = this.props.post.data;
    const link = `http://reddit.com/${permalink}`;
    return (
      <tr className="Post">
        <td valign="top" />
        <td>
          <a href={link} target="_blank">
            {title}
          </a>
        </td>
      </tr>
    );
  }
}

export default Post;
