/*/
  *  ┌──────────────────────────────────────────────────┐
  *  │ |> Re-Export Redux Reducers for - Single import  │
  *  └──────────────────────────────────────────────────┘
/*/

// NOTE: Refernce Redux.js for tips on refactoring the store
//--https://redux.js.org/recipes/structuring-reducers/structuring-reducers

export { default as areaQuery } from './reducers/area-query';
export { default as auth } from './reducers/auth';
export { default as config } from './reducers/config';
export { default as map } from './reducers/map';
export { default as patternQuery } from './reducers/pattern-of-life-query';
// export { default as polygonQuery } from './reducers/polygon-query';
//// export { default as refIdQuery } from './reducers/refid-query';
export { default as securityToken } from './reducers/security-token';

