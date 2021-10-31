import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import notesReducer from "./reducers/notes.reducer";
import thunk from "redux-thunk";

const middleware = [thunk]

const rootReducer = combineReducers({ notesReducer })

export const storee = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)