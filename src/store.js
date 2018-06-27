import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";

import axios from "axios";

const middleware = applyMiddleware(promise(), thunk, logger());

// export default createStore(reducer, middleware);

const store = createStore(reducer, middleware);

store.dispatch(dispatch => {
  dispatch({ type: "FOO" });

  let { limit } = this.state;
  limit += Object.keys(pinnedLinks).length;
  const url = `https://www.reddit.com/r/cats/top/.json?limit=${limit}`;

  axios.get(url)
    .then(response => response.json())
    .then(data => {
      // dispatch({type: ""})
      // const top = data.data.children;
      // const filteredTop = top.filter(
      //   post => pinnedLinks[post.data.permalink] === undefined
      // );
      // this.setState({
      //   top: filteredTop
      // });
      // console.log(top);
    })
    .catch(err => {
      console.log(err);
    });

  dispatch({ type: "BAR" });
});

export default store;

// let { limit } = this.state;
// limit += Object.keys(pinnedLinks).length;
// const url = `https://www.reddit.com/r/cats/top/.json?limit=${limit}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const top = data.data.children;
//     const filteredTop = top.filter(
//       post => pinnedLinks[post.data.permalink] === undefined
//     );
//     this.setState({
//       top: filteredTop
//     });
//     console.log(top);
//   })
//   .catch(err => {
//     console.log(err);
//   });
