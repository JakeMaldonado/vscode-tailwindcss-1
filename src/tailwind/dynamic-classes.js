const _ = require('lodash')

async function generateDynamicClasses(config) {
  const backgroundColors = _.map(
    config.backgroundColors,
    (colorHash, colorName) => `tw-bg-${colorName}`
  )

  const backgroundSize = _.map(
    config.backgroundSize,
    (sizeValue, sizeName) => `tw-bg-${sizeName}`
  )

  const borderColors = _.map(
    config.borderColors,
    (colorHash, colorName) => `tw-border-${colorName}`
  )

  const fontColors = _.map(
    config.textColors,
    (colorHash, colorName) => `tw-text-${colorName}`
  )

  const fontFamilies = _.map(
    config.fonts,
    (fonts, fontName) => `tw-font-${fontName}`
  )

  const widths = _.map(
    config.width,
    (widthValue, widthName) => `tw-w-${widthName}`
  )

  const minWidths = _.map(
    config.minWidth,
    (widthValue, widthName) => `tw-min-w-${widthName}`
  )

  const maxWidths = _.map(
    config.maxWidth,
    (widthValue, widthName) => `tw-max-w-${widthName}`
  )

  const heights = _.map(
    config.height,
    (heightValue, heightName) => `tw-h-${heightName}`
  )

  const minHeights = _.map(
    config.minHeight,
    (heightValue, heightName) => `tw-min-h-${heightName}`
  )

  const maxHeights = _.map(
    config.maxHeight,
    (heightValue, heightName) => `tw-max-h-${heightName}`
  )

  const leading = _.map(
    config.leading,
    (leadingValue, leadingName) => `tw-leading-${leadingName}`
  )

  const tracking = _.map(
    config.tracking,
    (trackingValue, trackingName) => `tw-tracking-${trackingName}`
  )

  const opacity = _.map(
    config.opacity,
    (opacityValue, opacityName) => `tw-opacity-${opacityName}`
  )

  const fill = _.map(
    config.svgFill,
    (fillValue, fillName) => `tw-fill-${fillName}`
  )

  const stroke = _.map(
    config.svgStroke,
    (strokeValue, strokeName) => `tw-stroke-${strokeName}`
  )

  const zIndex = _.map(
    config.zIndex,
    (zIndexValue, zIndexName) => `tw-z-${zIndexName}`
  )

  const shadows = _.map(
    config.shadows,
    (shadowValue, shadowName) => `tw-shadow-${shadowName}`
  )

  const textSizes = _.map(
    config.textSizes,
    (value, modifier) => `tw-text-${modifier}`
  )

  const fontWeights = _.map(
    config.fontWeights,
    (value, modifier) => `tw-font-${modifier}`
  )

  const defaultBorderRadius = [
    'tw-rounded',
    'tw-rounded-t',
    'tw-rounded-r',
    'tw-rounded-b',
    'tw-rounded-l',
    'tw-rounded-tl',
    'tw-rounded-tr',
    'tw-rounded-br',
    'tw-rounded-bl	'
  ]

  const borderRadius = _.flatMap(
    _.omit(config.borderRadius, 'tw-default'),
    (value, modifier) => [
      `tw-rounded-${modifier}`,
      `tw-rounded-t-${modifier}`,
      `tw-rounded-r-${modifier}`,
      `tw-rounded-b-${modifier}`,
      `tw-rounded-l-${modifier}`,
      `tw-rounded-tl-${modifier}`,
      `tw-rounded-tr-${modifier}`,
      `tw-rounded-br-${modifier}`,
      `tw-rounded-bl-${modifier}`
    ]
  )

  const borders = _.flatMap(config.borderWidths, (value, modifier) => [
    `tw-border-${modifier}`,
    `tw-border-t-${modifier}`,
    `tw-border-r-${modifier}`,
    `tw-border-b-${modifier}`,
    `tw-border-l-${modifier}`
  ])

  const margin = _.flatMap(config.margin, (value, modifier) => [
    `tw-m-${modifier}`,
    `tw-my-${modifier}`,
    `tw-mx-${modifier}`,
    `tw-mt-${modifier}`,
    `tw-mr-${modifier}`,
    `tw-mb-${modifier}`,
    `tw-ml-${modifier}`
  ])

  const negativeMargin = _.flatMap(config.margin, (value, modifier) => [
    `tw--m-${modifier}`,
    `tw--my-${modifier}`,
    `tw--mx-${modifier}`,
    `tw--mt-${modifier}`,
    `tw--mr-${modifier}`,
    `tw--mb-${modifier}`,
    `tw--ml-${modifier}`
  ])

  const padding = _.flatMap(config.padding, (value, modifier) => [
    `tw-p-${modifier}`,
    `tw-py-${modifier}`,
    `tw-px-${modifier}`,
    `tw-pt-${modifier}`,
    `tw-pr-${modifier}`,
    `tw-pb-${modifier}`,
    `tw-pl-${modifier}`
  ])

  return _.concat(
    backgroundColors,
    backgroundSize,
    borderColors,
    fontColors,
    fontFamilies,
    widths,
    minWidths,
    maxWidths,
    heights,
    minHeights,
    maxHeights,
    leading,
    tracking,
    opacity,
    fill,
    stroke,
    zIndex,
    shadows,
    textSizes,
    fontWeights,
    defaultBorderRadius,
    borderRadius,
    borders,
    margin,
    negativeMargin,
    padding
  )
}

module.exports = generateDynamicClasses
