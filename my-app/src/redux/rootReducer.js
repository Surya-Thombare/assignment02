import { combineReducers } from "redux";
import playersDataReducer from "./reducers/playersReducer";

const rootReducer = combineReducers({
    PlayersState: playersDataReducer
  });
  
export default rootReducer;