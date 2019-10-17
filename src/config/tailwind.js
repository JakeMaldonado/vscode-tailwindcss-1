const colors = require('./colors');
const screens = require('./screens');
const fonts = require('./fonts');
const textSizes = require('./text-sizes');
const fontWeights = require('./font-weights');
const leading = require('./line-height');
const tracking = require('./letter-spacing');
const textColors = require('./text-colors');
const backgroundColors = require('./background-colors');
const backgroundSize = require('./background-size');
const borderWidths = require('./border-widths');
const borderColors = require('./border-colors');
const borderRadius = require('./border-radius');
const width = require('./width');
const height = require('./height');
const minWidth = require('./min-width');
const minHeight = require('./min-height');
const maxWidth = require('./max-width');
const maxHeight = require('./max-height');
const padding = require('./padding');
const margin = require('./margin');
const negativeMargin = require('./negative-margin');
const shadows = require('./shadows');
const zIndex = require('./z-index');
const opacity = require('./opacity');
const svgFill = require('./svg-fill');
const svgStroke = require('./svg-stroke');

exports.default = {
  colors,
  screens,
  fonts,
  textSizes,
  fontWeights,
  leading,
  tracking,
  textColors,
  backgroundColors,
  backgroundSize,
  borderWidths,
  borderColors,
  borderRadius,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  padding,
  margin,
  negativeMargin,
  shadows,
  zIndex,
  opacity,
  svgFill,
  svgStroke,

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive', 'last-child'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    function({ addVariant }) {
      addVariant('last-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.last-child${separator}${className}:last-child`
        })
      })
    }
  ],

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: 'tw-',
    constant: true,
    separator: ':',
  }
};
