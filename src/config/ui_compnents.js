exports.componentPatterns = [
  "/^\\s*(?=\\=)([\\w\\= ]*)/",
  "/({{#|{{u).*$/"
]

exports.hamlComponentItems = [
  'component ui_button',
  'component ui_ui_alert, text: ""',
  'component ui_alert, kind: "success",  text: ""',
  'component ui_alert, kind: "warning", text: "Alert warning"',
  'component ui_alert, kind: "error", text: "Alert error"',
  'component ui_alert, kind: "success", flash:true text: "Flash message"',
  'component ui_heading, level: 1, text: "Heading One"',
  'component ui_heading, level: 2, text: "Heading Two"',
  'component ui_heading, level: 3, text: "Heading Three Inline"',
  'component ui_heading, level: 4, text: "Heading Four Inline"'
]

exports.emblemComponentItems = [
  'component ui-button',
  'component ui-ui-alert text=""',
  'component ui-alert kind= "success"  text=""',
  'component ui-alert kind="warning" text="Alert warning"',
  'component ui-alert kind="error" text="Alert error"',
  'component ui-alert kind="success" flash=true text="Flash message"',
  'component ui-heading level=1 text="Heading One"',
  'component ui-heading level=2 text="Heading Two"',
  'component ui-heading level=3 text="Heading Three Inline"',
  'component ui-heading level=4 text="Heading Four Inline"'
]

exports.hbComponents = [
  'ui-text textSize="sm" text=(concat "Two Way Bound Value: " boundValue)}}',
  'ui-text-field name="Hello" hint="Some hint here"}}',
  'ui-text-field name="Errored Field" value="error value" errored=true errorMessage="some error."}}',
  '#ui-button kind="secondary" disabled=buttonDisabled}}Basic Button{{/ui-button}}'
]
