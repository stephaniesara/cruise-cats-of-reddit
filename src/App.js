import React, { Component } from "react";
import "./App.css";
import TopPosts from "./components/Top-posts";
import PinnedPosts from "./components/Pinned-posts";
import logo from "./redditcat.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinned: [],
      pinnedLinks: {},
      top: [],
      limit: 20
    };
    this.togglePin = this.togglePin.bind(this);
    this.getTopPosts = this.getTopPosts.bind(this);
  }

  togglePin(post, state) {
    let { pinned, pinnedLinks } = this.state;
    if (state === "top") {
      pinned.push(post);
      pinnedLinks[post.data.permalink] = true;
    } else {
      pinned = pinned.splice(pinned.indexOf(post), 1);
      delete pinnedLinks[post.data.permalink];
    }
    this.getTopPosts(pinned, pinnedLinks);
  }

  getTopPosts(pinned, pinnedLinks) {
    let { limit } = this.state;
    limit += Object.keys(pinnedLinks).length;
    const url = `https://www.reddit.com/r/cats/top/.json?limit=${limit}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const top = data.data.children;
        const filteredTop = top.filter(
          post => pinnedLinks[post.data.permalink] === undefined
        );
        this.setState({
          top: filteredTop
        });
        console.log(top);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    const { pinned, pinnedLinks } = this.state;
    this.getTopPosts(pinned, pinnedLinks);
  }

  render() {
    const { pinned, top } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cats of Reddit</h1>
        </header>
        <div className="Feed">
          <PinnedPosts posts={pinned} togglePin={this.togglePin} />
          <TopPosts posts={top} togglePin={this.togglePin} />
        </div>
      </div>
    );
  }
}

export default App;
