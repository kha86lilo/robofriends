<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/App";
import * as serviceWorker from './serviceWorker';
import 'tachyons'; 
import {Provider} from 'react-redux'; 
import { createStore ,applyMiddleware, combineReducers} from "redux";
import {searchRobots, requestRobots} from './reducers';
import { createLogger } from "redux-logger";

const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots});
const store = createStore(rootReducer );
ReactDOM.render(
<Provider  store={store}><App/></Provider>, document.getElementById('root'));
 
serviceWorker.unregister();
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker"; 
import "tachyons";
import App from './Containers/App';

ReactDOM.render(
 <App/>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
>>>>>>> 092a6356b4b83e25d47636f3da0ca76e0badd5cb
