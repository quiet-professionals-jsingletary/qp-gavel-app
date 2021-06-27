# GAVEL

<header>

```
   __                                ___
 / _ `\      __      __  __    __   /\_ \                __      _____    _____
/\ \_\ \   /'__`\   /\ \/\ \ / ,.`\ \//\ \    _______  /'__`\   /\ '__`\ /\ '__`\
\ \____ \ /\ \_\.\_ \ \ \/ |/\  __/   \_\ \_ /\______\/\ \_\.\_ \ \ \_\ \\ \ \_\ \
 \/___/\ \\ \__/.\_\ \ \___/\ \____\  /\____\\/______/\ \__/.\_\ \ \ ,__/ \ \ ,__/
   /\____/ \/__/\/_/  \/__/  \/____/  \/____/          \/__/\/_/  \ \ \/   \ \ \/
   \_/__/                                                          \/_/     \/_/

```

</header>

<p align="left">
  <img  src="https://hardcore-jang-6e3b5c.netlify.com/Esri-React-Boot-Doc-Brand.svg" width="50%" height="auto"/>
</p>

Detailed documentation can be found on the wiki: https://github.com/Esri/esri-react-boot/wiki

<a href="https://www.esri.com/en-us/home">
   <img src="https://hardcore-jang-6e3b5c.netlify.com/poweredByEsri.svg" width="150" height="auto"/>
</a>

## Features

  - Ready to deploy (build) React application
  - Loads Esri's ArcGIS JS API
  - Map component that supports 2D/3D
  - Built in Authentication with ArcGIS REST JS
  - Includes Calcite-React with UI examples

  *and so much more...*

## Technology Stack

This project uses a number of open source libraries. We encourage you to become familiar with these libraries before you begin here.

| Library           | Source                                       |
| ------            | ------                                       |
| React             | https://reactjs.org/                         |
| Redux             | https://redux.js.org/                        |
| Create-React-App  | https://facebook.github.io/create-react-app/ |
| Redux-Saga        | https://github.com/redux-saga/redux-saga     |
| esri-loader       | https://github.com/Esri/esri-loader          |
| ArcGIS JS API     | https://developers.arcgis.com/javascript/    |
| ArcGIS REST JS    | https://github.com/Esri/arcgis-rest-js       |
| Styled-Components | https://www.styled-components.com/           |
| Calcite-React     | https://github.com/Esri/calcite-react        |

## Usage

The project utilizes Node & Node Package Manager to install dependencies and run a local development server. As part of Create-React-App you'll need to install Node (includes NPM) before you can run the Esri-React-Boot:

  - Node - https://nodejs.org/en/

## Esri Resources

 - [awesome-arcgis](https://esri-es.github.io/awesome-arcgis/arcgis/developers/profiles/front-end/technologies/react/ "via GitHub")
 - YouTube Content by Esri
    - Esri Events
    - Esri Industries
    - ArcGIS

### Installing

Clone the repository and install the dependencies:

```
$ npm install
```

### Running

Build and run live server:

```
$ npm start
```

* defaults to http://localhost:3000

## Source Code Audit (lines of code) 

The following table displays the cumulative lines of code that have been added to as well as a deeper breakdown of the 

| Code Type               | Lines of Code   |
| ------                  | ------          |
| Physical                | 7576            |
| Source                  | 4882            |
| Comment                 | 1812            |
| Comment (Single-Line)   | 1504            |
| Block Comment           | 308             |
| Mixed                   | 78              |
| Empty (Block comment)   | 3               |
| Empty                   | 963             |
| To-Do                   | 39              |
| Number of files read    | 57              |

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Esri Ecosystem

### ArcGIS JavaScript - API KEYS &amp; Credentials
### Credentials

  NOTE: Application credentials are similar to API keys in that both access location services on behalf 
  --  of a specific application or project. In general, it is preferable that you use API keys to access 
  --  location services over  application credentials.

### Implementation of Gavel -

1. The only requirement within your application's code is to specify what URL should be proxied. 
2. Then point to the correct location of the proxy file.

     1. First, add esri/core/urlUtils to your require statement.
     2. Next, specify the URL for the secured resource.
     3. Lastly, specify the location to the proxy file.

```javascript

    require (["esri/core/urlUtils"], function(urlUtils) {
      urlUtils.addProxyRule({
          urlPrefix: "my-standalone-arcgis-server.com"
          proxyUrl: "/proxy/"
      });
    });

```

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing). -->

## Licensing

Copyright 2019 Esri

Copyright &ci 2021 Quiet Professionals, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](license.txt) file.
