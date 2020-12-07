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

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { mapLoaded } from "../redux/reducers/map";
import { startAuth, logout } from "../redux/reducers/auth";

// Components
import TopNav from "calcite-react/TopNav";
import TopNavBrand from "calcite-react/TopNav/TopNavBrand";
import TopNavTitle from "calcite-react/TopNav/TopNavTitle";
import TopNavList from "calcite-react/TopNav/TopNavList";
import TopNavLink from "calcite-react/TopNav/TopNavLink";
import Map from "./esri/map/Map";
import LoadScreen from "./LoadScreen";
import UserAccount from "./UserAccount";
// TODO: Replace QP logo with SVG format
import logo from "../styles/images/quiet-professionals-logo.png";

// Styled Components
import styled from "styled-components";


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
  text-align: right;
`;

// Component definition
const Main = props => {
  const auth = useSelector(state => state.auth);
  const config = useSelector(state => state.config);
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

      {/* IDEA: Consider using `React.Suspense` in place of current `LoadScreen` component */}
      <LoadScreen isLoading={!isMapLoaded} />

      <Nav>
        <Logo href="#" src={logo} />
        <TopNavTitle href="#">Anonymized Mobile Phone Data</TopNavTitle>
        <NavList>
          <TopNavLink href="https://github.com/Quiet-Professionals-LLC/qp-ampd-app" target="_blank">
            AMPD Github
          </TopNavLink>
          <TopNavLink href="https://github.com/Esri/esri-react-boot/wiki" target="_blank">
            Boot Docs
          </TopNavLink>
          <TopNavLink href="https://calcite-react.netlify.com/" target="_blank">
            Calcite-React
          </TopNavLink>
        </NavList>
        <UserAccount
          user={auth.user}
          portal={auth.portal}
          token={auth.token}
          loggedIn={auth.loggedIn}
          signIn={signIn}
          signOut={signOut}
        />
      </Nav>

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
