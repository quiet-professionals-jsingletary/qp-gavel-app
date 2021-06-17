import React, { memo } from 'react';

import styled from 'styled-components';
import { CalciteAlert } from "@esri/calcite-components-react";

const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// TODO: Refactor code to accept additional props
const AlertBuilder = memo(isActive => {
  return (
    <AlertContainer>
      <CalciteAlert
        class="calcite-theme-light"
        icon="exclamation-mark-triangle"
        auto-dismiss-duration="medium"
        active=""
        scale="m"
        color="red"
        aria-hidden="true"
        role="alertdialog"
      >
        <div slot="title">
          
        </div>

        <div slot="message">
          <strong>Request Error:</strong>
          <span> The query failed before any data could be returned</span>
          {/* <span>Please try again</span> */}
        </div>

      </CalciteAlert>

    </AlertContainer>

  );

});

export default AlertBuilder;
