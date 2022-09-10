import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./sagas/root.saga";
import reducers from "./reducers/root.reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSagas);

export default store;
