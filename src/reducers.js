import { combineReducers } from "redux";

// import tweets from "./tweetsReducer";
// import user from "./userReducer";

// export default combineReducers({
//   tweets,
//   user
// });

const pinned = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_PINNED": {
      state = { ...state, pinned: action.payload };
      break;
    }
  }
  return state;
};

const pinnedLinks = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_PINNED": {
      state = { ...state, pinnedLinks: action.payload };
      break;
    }
  }
  return state;
};

const top = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_PINNED": {
      state = { ...state, top: action.payload };
      break;
    }
  }
  return state;
};

export default combineReducers({
  pinned,
  pinnedLinks,
  top
});
