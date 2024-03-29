//#region [copyright]
// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​
//#endregion

/**-------------------------------------------------------------
 *  #Configure and create the Redux here
 *  ~~Includes Saga
 *  @type {Object} This is the store object that Redux updates
 * 
*/

/**-------------------------------------------------------------- ->
 *  ┌─────────────────────────────────────┐
 *  │ |> Redux - Single-Source of Truth   │
 *  └─────────────────────────────────────┘
 *
 *  @name: 'Gavel - Anonymized marshalling of mobile device data'
 *  @description: 'Centralizing your application's logics and state persistence.'
 *  @author: '@quiet-professionals-jsingletary'
 *  @copyright: 'Quiet Professionals LLC'
 *
*/

// REDUX IMPORTS //
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

import * as reducers from './';
import { watcherSaga } from './sagas/root-saga';

export function initStore() {
  // Setup Redux dev tools
  // NOTE: Redux Devtool issue - see https://github.com/zalmoxisus/redux-devtools-extension/issues/619
  // TODO: Look into this 'Enhancer' to see if this workaround is still needed.
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Setup Redux store
  const rootReducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();

  // Add additional middleware to the `middleware` array
  const middleware = [sagaMiddleware];

  // if (process.env.NODE_ENV === 'development') {
  //   const { createLogger } = require('redux-logger');
  //   const reduxLogger = createLogger({
  //     duration: true,
  //     timestamp: true,
  //     level: 'console'
  //   });

  //   middleware.push(reduxLogger);
  // }
  

  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middleware))
  );

  // Run sagas
  // TODO: watcherSaga() to be merged with rootSaga() ./index.js
  sagaMiddleware.run(rootSaga);
  sagaMiddleware.run(watcherSaga);

  return store;
}
