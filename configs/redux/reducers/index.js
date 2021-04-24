import { combineReducers } from "redux";

import userReducer from "./user";
import transactionReducer from "./transaction";

const reducers = {
  user: userReducer,
  transaction: transactionReducer,
};

export default combineReducers(reducers);
