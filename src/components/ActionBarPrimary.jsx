import React from 'react';

import { 
  CalciteShell,
  CalciteShellPanel,
  CalciteAction,
  CalciteActionBar,
  CalciteActionGroup,
  CalciteBlock,
  // CalciteBlockSection,
  CalciteBlockSection,
  CalciteButton,
  CalciteTip,
  CalciteTipGroup,
  CalciteTipManager,
  CalciteFlow,
  CalcitePanel
} from "@esri/calcite-components-react";

/*/ -------------------------------------------------------------- ->
 *  ┌─────────────────────────────────────────┐
 *  │ |> React Component / Action Bar Primary │
 *  └─────────────────────────────────────────┘
 *
/*/

// NOTE: This component contains a `Calcite`Shell` that contains all Panels
// -- Add to DevOps backlog when time permits
const ActionBarPrimary = () => {

  return (
    <React.Fragment>
      <CalciteShell dir="ltr" className="calcite-theme-light" content-behind>
        <header slot="header">
          <h2>...</h2>
        </header>
        <CalciteShellPanel
          id="primaryPanel"
          slot="primary-panel"
          collapsed=""
          position="start"
          detached-height-scale="l"
          width-scale="m"
        >
          <CalciteActionBar className="calcite-theme-dark" slot="action-bar">
            {/* // _ Action Bar - Group 1 */}
            <CalciteActionGroup layout="vertical">
              <CalciteAction
                data-action-id="sketch"
                text="Sketch"
                label="Sketch Tools"
                icon="editAttributes"
                appearance="solid"
                scale="m"
              ></CalciteAction>
              <CalciteAction
                data-action-id="dates"
                text="Calendar"
                label="Choose Date Range"
                icon="calendar"
                appearance="solid"
                scale="m"
              ></CalciteAction>
              <CalciteAction
                data-action-id="layers"
                text="Layers"
                label="View Layers"
                icon="layers"
                appearance="solid"
                scale="m"
              ></CalciteAction>
            </CalciteActionGroup>
            {/* //_ Action Bar - Group 2 */}
            <CalciteActionGroup layout="vertical">
              <CalciteAction
                data-action-id="basemaps"
                text="Basemaps"
                label="Available Basemaps"
                icon="basemap"
                appearance="solid"
                scale="m"
              ></CalciteAction>

            </CalciteActionGroup>

          </CalciteActionBar>

          <CalcitePanel
            heading="Sketch"
            height-scale="m"
            width-scale="l"
            data-panel-id="layers"
          >
          <div id="sketchContainer"></div>
          </CalcitePanel>

          <CalcitePanel
            heading="Date Range"
            height-scale="m"
            width-scale="l"
            data-panel-id="dates"
          >
            <div id="dateRangeContainer"></div>
          </CalcitePanel>

          <CalcitePanel
            heading="Layers"
            height-scale="m"
            width-scale="l"
            data-panel-id="layers"
          >
            <div id="layersContainer"></div>
          </CalcitePanel>
          
        </CalciteShellPanel>

        <div style={{ 
          width: `100%`,
          height: `100%`,
          backgroundImage:` 
            linearGradient(45deg, #ccc 25%, transparent 25%),
            linearGradient(-45deg, #ccc 25%, transparent 25%),
            linearGradient(45deg, transparent 75%, #ccc 75%),
            linearGradient(-45deg, transparent 75%, #ccc 75%)
            `,
          backgroundSize: `20px 20px`,
          backgroundPosition: `0 0 0 10px, 10px, -10px, 0`
        }}>
        </div>

        {/* //_ Action Bar - Right */}
        <CalciteShellPanel
          slot="contextualPanel"
          collapsed=""
          position="end"
          detached-height-scale="l"
          width-scale="m"
        >
          <CalciteActionBar className="calcite-theme-light" slot="action-bar">
            <CalciteActionGroup layout="vertical">
              <CalciteAction
                text="Idea"
                label="Add Item"
                icon="lightbulb"
                appearance="solid"
                scale="m"
                disabled=""
              ></CalciteAction>
              <CalciteAction
                text="Information"
                label="Save Item"
                icon="information"
                appearance="solid"
                scale="m"
                disabled=""
              ></CalciteAction>
            </CalciteActionGroup>
            <CalciteActionGroup layout="vertical">
              <CalciteAction
                text="Question"
                label="View Layers"
                icon="question"
                appearance="solid"
                scale="m"
                disabled=""
              ></CalciteAction>
            </CalciteActionGroup>
          </CalciteActionBar>
          <CalciteFlow>
            <CalcitePanel heading="Layer settings">
              <CalciteAction
                slot="header-menu-actions"
                text="Cool thing"
                text-enabled=""
              ></CalciteAction>
              <CalciteAction
                slot="header-menu-actions"
                text="Cool thing"
                text-enabled=""
              ></CalciteAction>
              <CalciteAction
                slot="header-menu-actions"
                text="Cool thing"
                text-enabled=""
              ></CalciteAction>
              <CalciteBlock
                collapsible=""
                open=""
                heading="Contextual Content"
                summary="Select goodness"
              >
                <CalciteBlockSection>
                  <img
                    alt="demo"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22480%22%20viewBox%3D%220%200%20640%20480%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%22640%22%20height%3D%22480%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%2296%22%20dy%3D%2233.599999999999994%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E640%C3%97480%3C%2Ftext%3E%20%3C%2Fsvg%3E"
                    width="100%"
                  />
                  <CalciteBlockSection text="Cool things">
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                  </CalciteBlockSection>
                  <CalciteBlockSection text="Neat things">
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>

                  </CalciteBlockSection>

                </CalciteBlockSection>

              </CalciteBlock>
               
              <CalciteButton slot="footer-actions" width="half" appearance="clear">Cancel</CalciteButton>
              <CalciteButton slot="footer-actions" width="half">Save</CalciteButton>

            </CalcitePanel>

            <CalcitePanel heading="Deeper flow item">
              <CalciteBlock
                collapsible=""
                open=""
                heading="Contextual Content"
                summary="Select goodness"
              >
                <CalciteBlockSection>
                  <CalciteBlockSection text="Cool things">
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                  </CalciteBlockSection>
                  <img
                    alt="demo"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22480%22%20viewBox%3D%220%200%20640%20480%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%22640%22%20height%3D%22480%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%2296%22%20dy%3D%2233.599999999999994%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E640%C3%97480%3C%2Ftext%3E%20%3C%2Fsvg%3E"
                    width="100%"
                  />
                  <CalciteBlockSection text="Neat things">
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                  </CalciteBlockSection>

                </CalciteBlockSection>

              </CalciteBlock>

              <CalciteBlock
                collapsible=""
                open=""
                heading="Even more content"
                summary="Select goodness"
              >
                <CalciteBlockSection>
                  <CalciteBlockSection text="Cool things">
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                  </CalciteBlockSection>
                  <img
                    alt="demo"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22480%22%20viewBox%3D%220%200%20640%20480%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%22640%22%20height%3D%22480%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%2296%22%20dy%3D%2233.599999999999994%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E640%C3%97480%3C%2Ftext%3E%20%3C%2Fsvg%3E"
                    width="100%"
                  />
                  <CalciteBlockSection text="Neat things">
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                    <CalciteAction
                      text="Cool thing"
                      text-enabled=""
                    ></CalciteAction>
                  </CalciteBlockSection>
                  
                </CalciteBlockSection>

              </CalciteBlock>

              <CalciteButton slot="footer-actions" width="half" appearance="clear">Cancel</CalciteButton>
              <CalciteButton slot="footer-actions" width="half">Save</CalciteButton>
              
            </CalcitePanel>

          </CalciteFlow>

        </CalciteShellPanel>

        {/* <footer slot="footer">My Shell Footer</footer> */}

      </CalciteShell>

    </React.Fragment>

  )

}

export default ActionBarPrimary;
