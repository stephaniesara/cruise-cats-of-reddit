import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TopPosts from "./components/Top-Posts";
import logo from "./redditcat.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const url = "https://www.reddit.com/r/cats/top/.json?count=20";
    const limit = 20;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const posts = data.data.children.slice(0, limit);
        this.setState({
          posts: posts
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <img src="./redditcat.jpg" /> */}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cats of Reddit</h1>
        </header>
        <div className="Feed">
          <TopPosts posts={posts} />
        </div>
      </div>
    );
  }
}

export default App;
