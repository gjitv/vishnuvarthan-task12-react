import { applyMiddleware, compose, createStore } from "redux"
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer";
import rootSaga from "./productSaga";
import logger from "redux-logger"

const sagaMiddleware= createSagaMiddleware();

const middlewares=[sagaMiddleware];

if(process.env.NODE_ENV=== "development"){
    middlewares.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

export default store