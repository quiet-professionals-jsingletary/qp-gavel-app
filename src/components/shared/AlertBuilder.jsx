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
        class="calcite-theme-auto"
        icon="information"
        auto-dismiss="true"
        auto-dismiss-duration="medium"
        scale="s"
        color="blue"
        label="Info Alert"
        aria-hidden="true"
        role="alertdialog"
      >
        <div slot="title">
          <strong>From Gavel:</strong>
        </div>

        <div slot="message">
          <span><strong>TODO:</strong> This alert will have Gavel related messages / general info</span>
        </div>

      </CalciteAlert>

    </AlertContainer>

  );

});

const AlertBuilderProcess = memo(isActive => {
  return (
    <AlertContainer>
      <CalciteAlert
        id="alertProcessStart"
        class="calcite-theme-auto"
        icon="app-gear"
        auto-dismiss="true"
        auto-dismiss-duration="medium"
        scale="s"
        color="blue"
        label="Process Alert"
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

const AlertBuilderProcessSuccess = memo(isActive => {
  return (
    <AlertContainer>
      <CalciteAlert
        id="alertSuccess"
        class="calcite-theme-auto"
        icon=""
        auto-dismiss-duration="medium"
        scale="s"
        color="green"
        label="Process Success Alert"
        aria-hidden="true"
        role="alertdialog"
      >
        <div slot="title">
          <strong>Success:</strong>
        </div>

        <div slot="message">
          <span>Your data has been saved.</span>
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
        class="calcite-theme-auto"
        icon=""
        auto-dismiss="true"
        auto-dismiss-duration="medium"
        scale="s"
        color="yellow"
        label="Warning Alert"
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

const AlertBuilderNoResultsWarning = memo(isActive => {
  return (
    <AlertContainer>
      <CalciteAlert
        id="alertNoResultsWarning"
        class="calcite-theme-auto"
        icon=""
        auto-dismiss="true"
        auto-dismiss-duration="medium"
        scale="s"
        color="yellow"
        label="Warning No Results Alert"
        aria-hidden="true"
        role="alertdialog"
      >
        <div slot="title">
          <strong>From Gavel:</strong>
        </div>

        <div slot="message">
          <span>I'm sorry... I'm afraid I did not find any results. Adjust parameters and try again.</span>
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
        class="calcite-theme-auto"
        icon=""
        auto-dismiss-duration="slow"
        scale="s"
        color="red"
        label="Danger Alert"
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

export { 
  AlertBuilderInfo,
  AlertBuilderProcess,
  AlertBuilderProcessSuccess,
  AlertBuilderWarning,
  AlertBuilderNoResultsWarning,
  AlertBuilderDanger 
};
