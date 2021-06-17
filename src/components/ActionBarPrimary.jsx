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
      <CalciteShell dir="ltr" class="calcite-theme-light" content-behind>
        <CalciteShellPanel
          id="primary-panel"
          slot="primary-panel"
          position="start"
          detached-height-scale="l"
          width-scale="m"
        >
          <CalciteActionBar class="calcite-theme-dark" slot="action-bar">
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
          <CalciteBlock
            collapsible=""
            open=""
            heading="Primary Content"
            summary="This is the primary."
          >
            <CalciteBlockSection>
              <CalciteAction
                text="Play"
                text-enabled=""
                indicator=""
                icon="play"
              ></CalciteAction>
              <CalciteAction
                text="Extent"
                text-enabled=""
                icon="extent"
              ></CalciteAction>
              <CalciteAction
                text="Chart"
                text-enabled=""
                icon="arrow-up-right"
              ></CalciteAction>
            </CalciteBlockSection>
          </CalciteBlock>
          <CalciteBlock
            collapsible=""
            open=""
            heading="Another Block"
            summary="This is the primary."
          >
            <CalciteBlockSection>
              <div style={{height: 300 + 'px'}}>
                <p>Cool thing.</p>
              </div>
            </CalciteBlockSection>

          </CalciteBlock>

          <CalciteBlock
            collapsible=""
            open=""
            heading="Additional Block"
            summary="This is the primary."
          >
            <CalciteBlockSection>
              <div style={{ height: 300 + 'px'}}>
                <p>Cool thing.</p>
              </div>
            </CalciteBlockSection>

          </CalciteBlock>

          <CalciteBlock
            collapsible=""
            open=""
            heading="More Block"
            summary="This is the primary."
          >
            <CalciteBlockSection>
              <div style={{ height: 300 + 'px'}}>
                <p>Cool thang.</p>
              </div>

            </CalciteBlockSection>

          </CalciteBlock>

        </CalciteShellPanel>

        <div hidden style={{ 
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
        {/* _ Content Area - Center */}
        {/* <CalciteTipManager slot="center-row">
          <CalciteTipGroup group-title="Astronomy">
            <CalciteTip heading="The Red Rocks and Blue Water">
              <img 
                slot="thumbnail"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221000%22%20height%3D%22600%22%20viewBox%3D%220%200%201000%20600%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%221000%22%20height%3D%22600%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%22120%22%20dy%3D%2242%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E1000%C3%97600%3C%2Ftext%3E%20%3C%2Fsvg%3E"
                alt="This is an image."
              />
              <p>
                This tip is how a tip should really look. It has a landscape or square
                image and a small amount of text content. This paragraph is in an
                "info" slot.
              </p>
              <p>
                This is another paragraph in a subsequent "info" slot. In publishing
                and graphic design, Lorem ipsum is a placeholder text commonly used to
                demonstrate the visual form of a document without relying on
                meaningful content (also called greeking). Replacing the actual
                content with placeholder text allows designers to design the form of
                the content before the content itself has been produced.
              </p>
              <a href="http://www.esri.com">This is the "link" slot.</a>
            </CalciteTip>
            <CalciteTip heading="The Long Trees">
              <img
                slot="thumbnail"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221000%22%20height%3D%22600%22%20viewBox%3D%220%200%201000%20600%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%221000%22%20height%3D%22600%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%22120%22%20dy%3D%2242%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E1000%C3%97600%3C%2Ftext%3E%20%3C%2Fsvg%3E"
                alt="This is an image."
              />
              <p>
                This tip has an image that is a pretty tall. And the text will run out
                before the end of the image.
            </p>
              <p>
                In astronomy, the terms object and body are often used
                interchangeably.
            </p>
              <a href="http://www.esri.com">View Esri</a>
            </CalciteTip>
          </CalciteTipGroup>
          <CalciteTip heading="Square Nature">
            <img
              slot="thumbnail"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221000%22%20height%3D%221000%22%20viewBox%3D%220%200%201000%201000%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%221000%22%20height%3D%221000%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%22200%22%20dy%3D%2270%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E1000%C3%971000%3C%2Ftext%3E%20%3C%2Fsvg%3E"
              alt="This is an image."
            />
            <p>
              This tip has an image that is square. And the text will run out before
              the end of the image.
          </p>
            <p>
              In astronomy, the terms object and body are often used interchangeably.
          </p>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document without
              relying on meaningful content (also called greeking). Replacing the
              actual content with placeholder text allows designers to design the form
              of the content before the content itself has been produced.
          </p>
            <a href="http://www.esri.com">View Esri</a>
          </CalciteTip>
          <CalciteTip heading="The lack of imagery">
            <p>
              This tip has no image. As such, the content area will take up the entire
              width of the tip.
          </p>
            <p>
              This is the next paragraph and should show how wide the content area is
              now. Of course, the width of the overall tip will affect things. In
              astronomy, the terms object and body are often used interchangeably.
          </p>
            <a href="http://www.esri.com">View Esri</a>
          </CalciteTip>
        </CalciteTipManager> */}
        //_ Action Bar - Right
        <CalciteShellPanel
          slot="contextual-panel"
          position="end"
          detached-height-scale="l"
          width-scale="m"
        >
          <CalciteActionBar class="calcite-theme-light" slot="action-bar">
            <CalciteActionGroup layout="vertical">
              <CalciteAction
                text="Idea"
                label="Add Item"
                icon="lightbulb"
                appearance="solid"
                scale="m"
              ></CalciteAction>
              <CalciteAction
                text="Information"
                label="Save Item"
                icon="information"
                appearance="solid"
                scale="m"
              ></CalciteAction>
            </CalciteActionGroup>
            <CalciteActionGroup layout="vertical">
              <CalciteAction
                text="Question"
                label="View Layers"
                icon="question"
                appearance="solid"
                scale="m"
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
