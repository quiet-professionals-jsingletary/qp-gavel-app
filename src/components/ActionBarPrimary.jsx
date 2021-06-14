import React from 'react';

/*/ -------------------------------------------------------------- ->
 *  ┌─────────────────────────────────────────┐
 *  │ |> React Component / Action Bar Primary │
 *  └─────────────────────────────────────────┘
 *
/*/

const ActionBarPrimary = () => {

  return (
    <calcite-shell dir="ltr" class="calcite-theme-light" content-behind>
      <calcite-shell-panel
        id="primary-panel"
        slot="primary-panel"
        position="start"
        detached-height-scale="l"
        width-scale="m"
      >
        <calcite-action-bar class="calcite-theme-dark" slot="action-bar">
          <calcite-action-group layout="vertical">
            <calcite-action
              text="Sketch"
              label="Sketch Tools"
              icon="edit"
              appearance="solid"
              scale="m"
            ></calcite-action>
            <calcite-action
              text="Calendar"
              label="Choose Date Range"
              icon="calendar"
              appearance="solid"
              scale="m"
            ></calcite-action>
            <calcite-action
              text="Layers"
              label="View Layers"
              icon="layers"
              appearance="solid"
              scale="m"
            ></calcite-action>
          </calcite-action-group>
          <calcite-action-group layout="vertical">
            <calcite-action
              text="Basemaps"
              label="Available Basemaps"
              icon="basemapss"
              appearance="solid"
              scale="m"
            ></calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-block
          collapsible=""
          open=""
          heading="Primary Content"
          summary="This is the primary."
        >
          <calcite-block-content>
            <calcite-action
              text="Play"
              text-enabled=""
              indicator=""
              icon="play"
            ></calcite-action>
            <calcite-action
              text="Extent"
              text-enabled=""
              icon="extent"
            ></calcite-action>
            <calcite-action
              text="Chart"
              text-enabled=""
              icon="arrow-up-right"
            ></calcite-action>
          </calcite-block-content>
        </calcite-block>
        <calcite-block
          collapsible=""
          open=""
          heading="Another Block"
          summary="This is the primary."
        >
          <calcite-block-content>
            <div style="height: 300px;">
              <p>Cool thing.</p>
            </div>
          </calcite-block-content>
        </calcite-block>
        <calcite-block
          collapsible=""
          open=""
          heading="Additional Block"
          summary="This is the primary."
        >
          <calcite-block-content>
            <div style="height: 300px;">
              <p>Cool thing.</p>
            </div>
          </calcite-block-content>
        </calcite-block>
        <calcite-block
          collapsible=""
          open=""
          heading="More Block"
          summary="This is the primary."
        >
          <calcite-block-content>
            <div style="height: 300px;">
              <p>Cool thang.</p>
            </div>
          </calcite-block-content>
        </calcite-block>    
      </calcite-shell-panel>

      {/* <div style={{ width:'100%'; height:'100%'; background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
            linear-gradient(-45deg, #ccc 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #ccc 75%),
            linear-gradient(-45deg, transparent 75%, #ccc 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px; }}>

          </div> */}

      <calcite-tip-manager slot="center-row">
        <calcite-tip-group group-title="Astronomy">
          <calcite-tip heading="The Red Rocks and Blue Water">
            <img slot="thumbnail"
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
          </calcite-tip>
          <calcite-tip heading="The Long Trees">
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
          </calcite-tip>
        </calcite-tip-group>
        <calcite-tip heading="Square Nature">
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
        </calcite-tip>
        <calcite-tip heading="The lack of imagery">
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
        </calcite-tip>
      </calcite-tip-manager>
      <calcite-shell-panel
        slot="contextual-panel"
        position="end"
        detached-height-scale="l"
        width-scale="m"
      >
        <calcite-action-bar class="calcite-theme-light" slot="action-bar">
          <calcite-action-group layout="vertical">
            <calcite-action
              text="Idea"
              label="Add Item"
              icon="lightbulb"
              appearance="solid"
              scale="m"
            ></calcite-action>
            <calcite-action
              text="Information"
              label="Save Item"
              icon="information"
              appearance="solid"
              scale="m"
            ></calcite-action>
          </calcite-action-group>
          <calcite-action-group layout="vertical">
            <calcite-action
              text="Question"
              label="View Layers"
              icon="question"
              appearance="solid"
              scale="m"
            ></calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-flow>
          <calcite-panel heading="Layer settings">
            <calcite-action
              slot="header-menu-actions"
              text="Cool thing"
              text-enabled=""
            ></calcite-action>
            <calcite-action
              slot="header-menu-actions"
              text="Cool thing"
              text-enabled=""
            ></calcite-action>
            <calcite-action
              slot="header-menu-actions"
              text="Cool thing"
              text-enabled=""
            ></calcite-action>
            <calcite-block
              collapsible=""
              open=""
              heading="Contextual Content"
              summary="Select goodness"
            >
              <calcite-block-content>
                <img
                  alt="demo"
                  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22480%22%20viewBox%3D%220%200%20640%20480%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%22640%22%20height%3D%22480%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%2296%22%20dy%3D%2233.599999999999994%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E640%C3%97480%3C%2Ftext%3E%20%3C%2Fsvg%3E"
                  width="100%"
                />
                <calcite-block-section text="Cool things">
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                </calcite-block-section>
                <calcite-block-section text="Neat things">
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                </calcite-block-section>
              </calcite-block-content>
            </calcite-block>
            <calcite-button slot="footer-actions" width="half" appearance="clear">
              Cancel
            </calcite-button>
            <calcite-button slot="footer-actions" width="half">Save</calcite-button>
          </calcite-panel>
          <calcite-panel heading="Deeper flow item">
            <calcite-block
              collapsible=""
              open=""
              heading="Contextual Content"
              summary="Select goodness"
            >
              <calcite-block-content>
                <calcite-block-section text="Cool things">
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                </calcite-block-section>
                <img
                  alt="demo"
                  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22480%22%20viewBox%3D%220%200%20640%20480%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%22640%22%20height%3D%22480%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%2296%22%20dy%3D%2233.599999999999994%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E640%C3%97480%3C%2Ftext%3E%20%3C%2Fsvg%3E"
                  width="100%"
                />
                <calcite-block-section text="Neat things">
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                </calcite-block-section>
              </calcite-block-content>
            </calcite-block>
            <calcite-block
              collapsible=""
              open=""
              heading="Even more content"
              summary="Select goodness"
            >
              <calcite-block-content>
                <calcite-block-section text="Cool things">
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                </calcite-block-section>
                <img
                  alt="demo"
                  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22480%22%20viewBox%3D%220%200%20640%20480%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%22640%22%20height%3D%22480%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%2296%22%20dy%3D%2233.599999999999994%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E640%C3%97480%3C%2Ftext%3E%20%3C%2Fsvg%3E"
                  width="100%"
                />
                <calcite-block-section text="Neat things">
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                  <calcite-action
                    text="Cool thing"
                    text-enabled=""
                  ></calcite-action>
                </calcite-block-section>
              </calcite-block-content>
            </calcite-block>
            <calcite-button slot="footer-actions" width="half" appearance="clear">
              Cancel
            </calcite-button>
            <calcite-button slot="footer-actions" width="half">Save</calcite-button>
          </calcite-panel>
        </calcite-flow>
      </calcite-shell-panel>
      <footer slot="footer">My Shell Footer</footer>
    </calcite-shell>
  )
}

export default ActionBarPrimary;
