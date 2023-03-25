import { combineReducers } from "redux";
import { photosReducer } from "./photos";
import { usersReducer } from "./users";


export const rootReducer = combineReducers({
    photos: photosReducer,
    users: usersReducer
})