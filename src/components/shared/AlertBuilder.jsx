import React, { memo } from 'react';

import styled from 'styled-components';
import { CalciteAlert } from "@esri/calcite-components-react";

const AlertContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
`;

// TODO: Refactor code to accept additional props
const AlertBuilderInfo = memo(isActive => {
  return (
    <AlertContainer>
      <CalciteAlert
        id="alertInfo"
        class="calcite-theme-light"
        icon=""
        auto-dismiss="true"
        auto-dismiss-duration="medium"
        active="false"
        scale="s"
        color="blue"
        aria-hidden="true"
        role="alertdialog"
      >
        <div slot="title">
          <strong>Processing...</strong>
        </div>

        <div slot="message">
          <span>Just a moment please - Gavel is working on your request.</span>
        </div>

      </CalciteAlert>

    </AlertContainer>

  );

});

const AlertBuilderSuccess = memo(isActive => {
  return (
    <AlertContainer>
      <CalciteAlert
        id="alertSuccess"
        class="calcite-theme-light"
        icon=""
        auto-dismiss="true"
        auto-dismiss-duration="medium"
        active="false"
        scale="s"
        color="green"
        aria-hidden="true"
        role="alertdialog"
      >
        <div slot="title">
          <strong>Success:</strong>
        </div>

        <div slot="message">
          <span>Your additions / updates have been saved.</span>
        </div>

      </CalciteAlert>

    </AlertContainer>

  );

});

const AlertBuilderWarning = memo(isActive => {
  return (
    <AlertContainer>
      <CalciteAlert
        id="alertWarning"
        class="calcite-theme-light"
        icon=""
        auto-dismiss="true"
        auto-dismiss-duration="medium"
        active="false"
        scale="s"
        color="yellow"
        aria-hidden="true"
        role="alertdialog"
      >
        <div slot="title">
          <strong>Attention:</strong>
        </div>

        <div slot="message">
          <span>Gavel cannot authenticate your user credentials - Please logout then log back in.</span>
        </div>

      </CalciteAlert>

    </AlertContainer>

  );

});

const AlertBuilderDanger = memo(isActive => {
  return (
    <AlertContainer>
      <CalciteAlert
        id="alertDanger"
        class="calcite-theme-light"
        icon=""
        auto-dismiss-duration="fast"
        active="false"
        scale="s"
        color="red"
        aria-hidden="true"
        role="alertdialog"
      >
        <div slot="title">
          <strong>Error:</strong>
        </div>

        <div slot="message">
          <span>An unexpected error has occurred - Please try again.</span>
        </div>

      </CalciteAlert>

    </AlertContainer>

  );

});

export { AlertBuilderInfo, AlertBuilderSuccess, AlertBuilderWarning, AlertBuilderDanger };
