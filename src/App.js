import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TopPosts from "./components/Top-posts";
import PinnedPosts from "./components/Pinned-posts";
import logo from "./redditcat.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinned: [],
      top: []
    };
  }

  componentDidMount() {
    const url = "https://www.reddit.com/r/cats/top/.json?count=20";
    const limit = 20;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const top = data.data.children.slice(0, limit);
        this.setState({
          top: top
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { pinned, top } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <img src="./redditcat.jpg" /> */}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cats of Reddit</h1>
        </header>
        <div className="Feed">
          {pinned.length > 0 && <PinnedPosts posts={pinned} />}
          <TopPosts posts={top} />
        </div>
      </div>
    );
  }
}

export default App;
