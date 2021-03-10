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
import { BrowserRouter, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import { initStore } from "./redux/store";

// Components
// import { homepage } from "../package.json";
import App from "./components/App";

// Styles
import "@arcgis/core/assets/esri/themes/light-blue/main.css";
import CalciteThemeProvider from "calcite-react/CalciteThemeProvider";
import "./styles/fonts.css";
import { GlobalStyle } from "./styles/global";
//#endregion

// reportWebVitals(console.log);

/*/ -------------------------------------------------------------- ->
 *  ┌──────────────────────────────────────┐
 *  │ |> Homepage / Entry Point Settings   │
 *  └──────────────────────────────────────┘
 *  !! App runs at the root locally, but under /{homepage} in prod
 *  !! /{homepage} can be adjusted in `../package.json`
 * 
/*/
let basename = undefined;
process.env.NODE_ENV !== "production" ? (basename = "/") : (basename = "./");

// Create Redux Store
export const store = initStore();

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
