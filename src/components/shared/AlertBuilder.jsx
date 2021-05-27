import React, { memo } from 'react';

const AlertBuilder = memo(() => {
  return (
    <React.Fragment>
      <GuideExample label="showCloseLa`bel">
        <Alert showCloseLabel onClose={() => console.log('clicked')}>
          <AlertTitle>Here's a general bit of information</AlertTitle>
          <AlertMessage>Has close link!</AlertMessage>
        </Alert>
      </GuideExample>
    </React.Fragment>
  );
});

export default AlertBuilder;