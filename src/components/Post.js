import React, { Component } from "react";
import { AddCircle, AddCircleOutline } from "@material-ui/icons";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { togglePin, state, post } = this.props;
    const { title, permalink } = post.data;
    const link = `http://reddit.com/${permalink}`;
    return (
      <tr className="Post">
        <td valign="top">
          {state === "pinned" && (
            <AddCircle onClick={() => togglePin(post, state)} />
          )}
          {state === "top" && (
            <AddCircleOutline onClick={() => togglePin(post, state)} />
          )}
        </td>
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
