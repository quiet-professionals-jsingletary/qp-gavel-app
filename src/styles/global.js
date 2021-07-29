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

import { createGlobalStyle } from "styled-components";

// Global page styling
// Override AGIS JS API Widgets here
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    font-family: Montserrat, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .esri-layer-list__item {
    &::before {
      width: 100%;
      left: 0;
    }
  }

  nav.ciBUMa {
    padding: 0 1em;
  }

  /* Align */
  .align-start {
    text-align: left
  }

  .align-center {
    text-align: center
  }

  .align-end {
    text-align: right
  }

  /* Display */
  *[qp-hidden="true"] {
    display: none
  }

  .qp-hidden {
    display: none
  }
`;
