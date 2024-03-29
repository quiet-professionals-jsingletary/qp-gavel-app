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

// ACTION TYPES //
export const types = {
  MAP_LOADED: "MAP_LOADED"
};

// REDUCERS //
export const INITIAL_STATE = {
  loaded: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.MAP_LOADED:
      return {
        ...state,
        loaded: true
      };
      
    default:
      return state;
  }
};

// ACTIONS //
export const mapLoaded = options => ({ 
  type: types.MAP_LOADED, 
  payload: options 
});
