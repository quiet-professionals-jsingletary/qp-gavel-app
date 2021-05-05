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

/*/
*  ┌─────────────────────────────────────┐
*  │ |> Combine Sagas into one output    │
*  └─────────────────────────────────────┘
/*/
import { all, fork } from 'redux-saga/effects';

import * as authSagas from './_auth';
import * as configSagas from './_config';
import * as securitySagas from './_security-token';
import * as areaSagas from './_area-query';
import * as patternSagas from './_pattern-of-life-query';

export default function* rootSaga() {
  yield all([
    ...Object.values(authSagas),
    ...Object.values(configSagas),
    ...Object.values(securitySagas),
    ...Object.values(areaSagas),
    ...Object.values(patternSagas)
    // include all additional Sagas
  ].map(fork));
}
