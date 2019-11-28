exports.componentPatterns = [
  "/^\\s*(?=\\=)([\\w\\= ]*)/",
  "/({{#|{{u).*$/"
]

exports.hamlComponentItems = [
  'component :ui_button, text: "Primary"',
  'component :ui_button, kind: "secondary", text: "Secondary"',
  'component :ui_button, kind: "tertiary", text: "Tertiary"',
  'component :ui_ui_alert, text: "Sample alert!"',
  'component :ui_alert, kind: "success",  text: "Success!"',
  'component :ui_alert, kind: "warning", text: "Alert warning"',
  'component :ui_alert, kind: "error", text: "Alert error"',
  'component :ui_alert, kind: "success", flash:true text: "Flash message"',
  'component :ui_heading, level: 1, text: "Heading One"',
  'component :ui_heading, level: 2, text: "Heading Two"',
  'component :ui_heading, level: 3, text: "Heading Three Inline"',
  'component :ui_heading, level: 4, text: "Heading Four Inline"',
  'component :ui_badge, text: "Badge (default)"',
  'component :ui_badge, kind: "success", text: "Success Badge"',
  'component :ui_badge, kind: "warning", text: "Warning Badge"',
  'component :ui_badge, kind: "neutral", text: "Neutral Badge"',
  'component :ui_badge, kind: "disabled", text: "Disabled Badge"',
  'component :ui_divider',
  'component :ui_radio_button, name: "simple-radiobutton", label: "Radio Button with Simple Format", value: "simple"',
]

exports.emblemComponentItems = [
  'component ui-button text="Primary"',
  'component ui-button text="Secondary" kind="secondary"',
  'component ui-button text="Tertiary" kind="tertiary"',
  'component ui-ui-alert text="Alert!"',
  'component ui-alert kind= "success"  text="Success!"',
  'component ui-alert kind="warning" text="Alert warning"',
  'component ui-alert kind="error" text="Alert error"',
  'component ui-alert kind="success" flash=true text="Flash message"',
  'component ui-heading level=1 text="Heading One"',
  'component ui-heading level=2 text="Heading Two"',
  'component ui-heading level=3 text="Heading Three Inline"',
  'component ui-heading level=4 text="Heading Four Inline"',
  'component ui-badge text="Badge (default)"',
  'component ui-badge text="Success Badge" kind="success"',
  'component ui-badge text="Warning Badge" kind="warning"',
  'component ui-badge text="Error Badge" kind="error"',
  'component ui-badge text="Neutral Badge" kind="neutral"',
  'component ui-badge text="Disabled Badge" kind="disabled"',
  'component ui-divider',
  'component ui-radio-button name="simple-radiobutton" label="Radio Button with Simple Format" value="simple"',
]

exports.hbComponents = [
  'ui-text textSize="sm" text=(concat "Two Way Bound Value: " boundValue)}}',
  'ui-text-field name="Hello" hint="Some hint here"}}',
  'ui-text-field name="Errored Field" value="error value" errored=true errorMessage="some error."}}',
  '#ui-button kind="secondary" disabled=buttonDisabled}}Basic Button{{/ui-button}}'
]
