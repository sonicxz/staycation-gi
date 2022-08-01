const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
