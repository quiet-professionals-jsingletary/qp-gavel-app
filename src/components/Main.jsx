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

// Calcite Components
import Button from "calcite-react/Button";
import TopNav from "calcite-react/TopNav";
import TopNavBrand from "calcite-react/TopNav/TopNavBrand";
import TopNavTitle from "calcite-react/TopNav/TopNavTitle";
import TopNavList from "calcite-react/TopNav/TopNavList";
import TopNavLink from "calcite-react/TopNav/TopNavLink";
import SubNav from "calcite-react/SubNav";

// QP Custom
import UserAccount from "./UserAccount";
import LoadScreen from "./LoadScreen";
import MapComponent from "./esri/map/Map";
import ActionBarPrimary from "./ActionBarPrimary";

// import DateRangeWidget from "./esri/widgets/DateRangeWidget";
// import DateRangeEsxpandWidget from "./esri/widgets/DateRangeExpandWidget";

// TODO: Replace QP logo with SVG format
import logo from "../styles/images/quiet-professionals-logo.png";

// Icons
// import { DataIcon } from "calcite-ui-icons-react/DataIcon";
// import { GraphScatterPlotIcon as AmpdIcon } from "calcite-ui-icons-react/GraphScatterPlotIcon";
// import { GearIcon } from "calcite-ui-icons-react/GearIcon";

// Styled Components
import styled from "styled-components";
// import SubNavActions from "calcite-react/SubNav/SubNavActions";
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

//#endregion

//#region [component]
const Main = props => {
  const auth = useSelector(state => state.auth);
  const config = useSelector(state => state.config);
  const user = useSelector(state => state.auth.user);
  const isMapLoaded = useSelector(state => state.map.loaded);
  const dispatch = useDispatch();

  //#region [oauth]
  // Sign in button click event
  const signIn = () => {
    const { clientId, sessionId, popup } = config;
    console.log("Init user authentication");
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
    console.log("Logout current user");
    dispatch(logout(config.sessionId));
  }
  //#endregion

  //#region [utils] 
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
  // TODO: Merge Action Bar into this `Main.jsx` Component
  return (
    <Container>
      {/* // IDEA: Consider using `React.Suspense` in place of current `LoadScreen` component */}
      <LoadScreen isLoading={!isMapLoaded} />
      {/* // TODO: Update Current Nav or possibly extend Calcite TopNav */}
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

      {/* <ActionBarPrimary> */}
        <MapWrapper>
          {/* //! WARN: Determine if Suspense is still beta release and is an `experimental feature` */}
          <Suspense fallback={<div>Loading Gavel...</div>}>
            <MapComponent
              onMapLoaded={mapLoaded}
              mapConfig={config.mapConfig}
              loaderConfig={config.loaderConfig}
            />
          </Suspense>

        </MapWrapper>

      {/* </ActionBarPrimary> */}

    </Container>
  );
  
  //#endregion
}

export default Main;
