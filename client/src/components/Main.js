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

// React imports
import React from "react";
// import { NavLink } from "react-router-dom";

// Redux imports
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
import Map from "./esri/map/Map";

import DateRange from "./esri/widgets/DateRange";
import DateRangeExpandWidget from "./esri/widgets/DateRangeExpandWidget";
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
// import { DataIcon } from "calcite-ui-icons-react/DataIcon";
// import { GraphScatterPlotIcon as AmpdIcon } from "calcite-ui-icons-react/GraphScatterPlotIcon";
// import { GearIcon } from "calcite-ui-icons-react/GearIcon";

// Styled Components
import styled from "styled-components";
import SubNavActions from "calcite-react/SubNav/SubNavActions";
// import Devices from "../utils/devices";

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

// Component definition
const Main = props => {
  const auth = useSelector(state => state.auth);
  const config = useSelector(state => state.config);
  const user = useSelector(state => state.auth.user);
  const isMapLoaded = useSelector(state => state.map.loaded);
  const dispatch = useDispatch();

  // Sign in button click event
  const signIn = () => {
    const { clientId, sessionId, popup } = config;
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
    dispatch(logout(config.sessionId));
  }

  return (
    <Container>

      {/* // IDEA: Consider using `React.Suspense` in place of current `LoadScreen` component */}
      <LoadScreen isLoading={!isMapLoaded} />

      {/* // TODO: Udate Current Nav or possibly extend Calcite TopNav */}
      <Nav>
        <Logo href="#" src={logo} />
        <TopNavTitle href="#">Anonymized Mobile Phone Data</TopNavTitle>
        { (!user)
          ? <NavList>
              <TopNavLink href="/">
                Get AMPD
              </TopNavLink>
              <TopNavLink href="/">
                Features
              </TopNavLink>
              <TopNavLink href="/">
                About QP
              </TopNavLink> 
            </NavList>
          : <NavList>
              <TopNavLink href="https://github.com/Quiet-Professionals-LLC/qp-ampd-app" target="_blank">
                AMPD Repo
              </TopNavLink>
              <TopNavLink href="https://github.com/Esri/esri-react-boot/wiki" target="_blank">
                Docs
              </TopNavLink>
              <TopNavLink href="https://calcite-react.netlify.com/" target="_blank">
                Calcite-React
              </TopNavLink>
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

      <SubNav>
        <SubNavTitle></SubNavTitle>
        <SubNavList>
          <SubNavLink active href="#">Glens</SubNavLink>
          <SubNavLink href="#">Dales</SubNavLink>
          <SubNavLink href="#">Meadows</SubNavLink>
        </SubNavList>
        
      </SubNav>

      <MapWrapper>
        <Map 
          onMapLoaded={mapLoaded}
          mapConfig={config.mapConfig}
          loaderConfig={config.loaderConfig}
        />
      </MapWrapper>

    </Container>

  );
  
}

export default Main;
