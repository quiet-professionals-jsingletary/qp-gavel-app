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

//#region [imports]
// Polyfills
// import "@babel/polyfill";

// React
import React, { useContext } from "react";
import ReactDOM from "react-dom";

// React Router
import { 
  BrowserRouter,
  Route 
} from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import { initStore } from "./redux/store";

// Components
import { homepage } from "../package.json";
import App from "./components/App";

// PWA
import * as serviceWorker from './registerServiceWorker';

// Utils
require('dotenv').config();

// Calcite-React Components
import CalciteThemeProvider from "calcite-react/CalciteThemeProvider";

// Calcite-Components
import '@esri/calcite-components/dist';
import '@esri/calcite-components/dist/'
import { 
  applyPolyfills,
  defineCustomElements 
} from '@esri/calcite-components/dist/loader';

// Fonts & Styles
import "./styles/fonts.css";
import { GlobalStyle } from "./styles/global";
// import "@arcgis/core/assets/esri/themes/dark/main.css";

//#endregion

// reportWebVitals(console.log);

/*/ -------------------------------------------------------------- ->
 *  ┌──────────────────────────────────────┐  
 *  │ |> Homepage / Entry Point Settings   │
 *  └──────────────────────────────────────┘
 *  !! App runs at the root locally, but under ${homepage} in prod
 *  !! ${homepage} can be adjusted in `../package.json`
 * 
/*/
// --App runs at the root locally, but under /{homepage} in production
let basename = null;
process.env.NODE_ENV !== "production" ? (basename = ".") : (basename = homepage);

console.log('NODE_ENV: ', process.env.NODE_ENV);
console.log('basename: ', basename);

// Create Redux Store
export const store = initStore();

// Apply polyfills and then define the custom elements
// NOTE: Polyfills are not needed if you don't support IE11 or Edge
applyPolyfills().then(() => {
  defineCustomElements(window);
  // App Entry Point
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <CalciteThemeProvider>
          <GlobalStyle />
          <Route path="/" component={App} />
        </CalciteThemeProvider>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
