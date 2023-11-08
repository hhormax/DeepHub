import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import myProfileReducer from "./my-profile-reducer";
import { reducer as formik } from "formik-redux";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    myProfilePage: myProfileReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formik,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware));

window.store__ = store;

export default store;