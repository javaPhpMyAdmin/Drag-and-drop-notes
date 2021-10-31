import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import notesReducer from "./notes.reducer";
import thunk from "redux-thunk";

const middleware = [thunk]

export const storee = createStore(
    notesReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)