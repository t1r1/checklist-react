import { combineReducers } from "redux";

import User from "./User";
import Todos from "./Todos";

export default combineReducers({
  User,
  Todos
});
