import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { chatsReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./message/reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { articlesReducer } from "./articles/reducer";

const persistConfig = {
    key: "messenger",
    storage,
};

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    message: messagesReducer,
    articles: articlesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
