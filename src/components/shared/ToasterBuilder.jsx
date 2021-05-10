import React from 'react';
import styled from 'styled-components';

import Button from "calcite-react/Button";
import Tooltip from "calcite-react/Tooltip";

import InformationIcon from 'calcite-ui-icons-react/InformationIcon';

const StyledToaster = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToasterBuilder = props => {
  return (
    <StyledToaster>
      <span>A Toaster Was Added</span>
      <Tooltip title="More Info" placement="left">
        <Button
          onClick={props.onInfoClick}
          type="button"
          iconButton
          icon={<InformationIcon />}
        />
      </Tooltip>
    </StyledToaster>
  );
};

export default ToasterBuilder;
