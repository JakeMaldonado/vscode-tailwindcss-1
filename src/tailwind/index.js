const _ = require('lodash')
const tailwindStaticClasses = require('./static-classes')
const generateDynamicClasses = require('./dynamic-classes')

const twConfig = require('../config/tailwind')

async function generateClasses() {
  // Some classes are static and do not need to be generated
  // whereas some need to be generated dynamically after reading the config file
  const staticClasses = tailwindStaticClasses

  // Find configuration file in the workspace
  const dynamicClasses = await generateDynamicClasses(twConfig.default)

  // Return all classes, combined
  return _.concat(staticClasses, dynamicClasses)
}

module.exports = generateClasses
