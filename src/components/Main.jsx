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
// React
import React, { Profiler, Suspense, useRef } from "react";
// import { NavLink } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { mapLoaded } from "../redux/reducers/map";
import { startAuth, logout } from "../redux/reducers/auth";

// Components
import Button from "calcite-react/Button";
import TopNav from "calcite-react/TopNav";
import TopNavBrand from "calcite-react/TopNav/TopNavBrand";
import TopNavTitle from "calcite-react/TopNav/TopNavTitle";
import TopNavList from "calcite-react/TopNav/TopNavList";
import TopNavLink from "calcite-react/TopNav/TopNavLink";
import SubNav from "calcite-react/SubNav";
import SubNavTitle from "calcite-react/SubNav/SubNavList";
import SubNavList from "calcite-react/SubNav/SubNavList";
import SubNavLink from "calcite-react/SubNav/SubNavLink";

import LoadScreen from "./LoadScreen";
import UserAccount from "./UserAccount";
import MapComponent from "./esri/map/Map";

// import DateRangeWidget from "./esri/widgets/DateRangeWidget";
// import DateRangeExpandWidget from "./esri/widgets/DateRangeExpandWidget";
import {
  CalciteP,
  CalciteA,
  CalciteH1,
  CalciteH2,
  CalciteH3,
  CalciteH4,
  CalciteH5,
  CalciteH6,
  CalciteOl,
  CalciteUl,
  CalciteLi
} from 'calcite-react/Elements'

// TODO: Replace QP logo with SVG format
import logo from "../styles/images/quiet-professionals-logo.png";

// Icons
import { DataIcon } from "calcite-ui-icons-react/DataIcon";
import { GraphScatterPlotIcon as AmpdIcon } from "calcite-ui-icons-react/GraphScatterPlotIcon";
import { GearIcon } from "calcite-ui-icons-react/GearIcon";

// Styled Components
import styled from "styled-components";
import SubNavActions from "calcite-react/SubNav/SubNavActions";
// import Devices from "../utils/devices";
//#endregion

//#region [styles]
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const MapWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

const Logo = styled(TopNavBrand)`
  justify-content: center;
  & img {
    height: 55px;
  }
`;

const Nav = styled(TopNav)`
  && {
    z-index: 5;
  }
`;

const NavList = styled(TopNavList)`
  text-align: inherit;
`;

const SubNavToolbar = styled(SubNav)`
  height: 40px;
  div { height: 40px; }
`;
//#endregion

//#region [component]
const Main = props => {
  const auth = useSelector(state => state.auth);
  const config = useSelector(state => state.config);
  const user = useSelector(state => state.auth.user);
  const isMapLoaded = useSelector(state => state.map.loaded);
  const elementRef = useRef();
  const dispatch = useDispatch();

  // Sign in button click event
  console.log("Main > just before signIn() )");
  const signIn = () => {
    const { clientId, sessionId, popup } = config;
    console.log("Main > signIn() > just before dispatch(startAuth())");
    dispatch(
      startAuth({
        clientId,
        sessionId,
        popup,
        signInRequest: true
      })
    );
  }

  // Sign out button click event
  const signOut = () => {
    console.log("Main > signOut() > just before dispatch(logout())");
    dispatch(logout(config.sessionId));
  }
  // #region [utils] 
  // Performance Benchmarks
  function callback(
    id, 
    phase, 
    actualTime, 
    baseTime, 
    startTime, 
    commitTime) 
  {
    console.log("Main > callback()");
    console.dir(
      "id: " + id,
      "phase:" + phase,
      "actualTime:" + actualTime,
      "baseTime: " + baseTime,
      "startTime: " + startTime,
      "commitTime: " + commitTime
    )
  }
  // #endregion
  return (
    <Container>
      {/* // IDEA: Consider using `React.Suspense` in place of current `LoadScreen` component */}
      <LoadScreen isLoading={!isMapLoaded} />

      {/* // TODO: Udate Current Nav or possibly extend Calcite TopNav */}
      {/* <Profiler id="Nav" onRender={callback}> */}
      <Nav>
        <Logo href="#" src={logo} />
        <TopNavTitle href="#">Welcome to Gavel</TopNavTitle>
        { (!user)
          ? <NavList>

            </NavList>
          : <NavList>

            </NavList> 
        }

        <UserAccount
          user={auth.user}
          portal={auth.portal}
          token={auth.token}
          loggedIn={auth.loggedIn}
          signIn={signIn}
          signOut={signOut}
        />
      </Nav>
      {/* </Profiler> */}

      <SubNavToolbar>
        <SubNavTitle></SubNavTitle>
        <SubNavList>
          <SubNavLink active >Queries</SubNavLink>
          <SubNavLink disabled href="#">History</SubNavLink>
          <SubNavLink disabled href="#">Config</SubNavLink>
          <div id="searchBarWidgetDiv" className="calcite"></div>
        </SubNavList>
        
      </SubNavToolbar>

      <MapWrapper>
        {/* //! WARN: Determine if Suspense should be left out (experimental feature) */}
        {/* <Profiler id="MapProfile" onRender={callback}> */}
        <Suspense fallback={<div>Loading Maps...</div>}>
          {/* <Profiler id="MapComponent" onRender={callback}> */}
          <MapComponent
            onMapLoaded={mapLoaded}
            mapConfig={config.mapConfig}
            loaderConfig={config.loaderConfig}
          />
          {/* </Profiler> */}

        </Suspense>

        {/* </Profiler> */}

      </MapWrapper>

    </Container>
  );
  
}

export default Main;
//#endregion