import reducer from "../reducers"
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux"


const store = createStore(
  reducer,
    compose(
        applyMiddleware(thunk)
    )
);

export default store
