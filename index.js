import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import catalogReducer from "./reducers/catalogReducer";
import compareReducer from "./reducers/compareReducer";

const rootReducer = combineReducers({
  catalog: catalogReducer,
  compare: compareReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
