import React from 'react';
import styled from 'styled-components';

// import Button from "calcite-react/Button";
// import Tooltip from "calcite-react/Tooltip";

// import InformationIcon from 'calcite-ui-icons-react/InformationIcon';
// import { information16, information24 } from "@esri/calcite-ui-icons";

const NoticeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NoticeBuilder = props => {
  return (
    <NoticeContainer>
      <calcite-notice
        class="calcite-theme-light"
        icon="data"
        // active=""
        dismissible=""
        scale="m"
        width="auto"
        color="blue"
      >
        <div slot="title">Notice title</div>
        <div slot="message">Notice message lorem ipsum</div>

      </calcite-notice>
    </NoticeContainer>

  );

};

export default NoticeBuilder;
