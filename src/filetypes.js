// Borrowed from https://github.com/zignd/HTML-CSS-Class-Completion/blob/master/src/extension.ts

const classRegex = /class=["|']([\w- ]*$)/
const hamlClassRegex = /class: ["|']([\w- ]*$)/
const classNameRegex = /className=["|']([\w- ]*$)/
const applyRegex = /@apply ([\.\w- ]*$)/
const emmetRegex = /(?=\.)([\w-\. ]*$)/
const componentRegex = /^\s*(?=\=)([\w\= ]*)/
const hbsRegex = /({{#|{{u).*$/

const jsPatterns = [
  {
    regex: classRegex,
    splitCharacter: ' '
  },
  {
    regex: classNameRegex,
    splitCharacter: ' '
  },
  {
    regex: emmetRegex,
    splitCharacter: '.'
  }
]

const hbsPatterns = [
  {
    regex: hbsRegex,
    splitCharacter: '{'
  } 
]

const htmlPatterns = [
  {
    regex: classRegex,
    splitCharacter: ' '
  },
  {
    regex: emmetRegex,
    splitCharacter: '.'
  }
]

const hamlPatterns = [
  {
    regex: emmetRegex,
    splitCharacter: '.'
  },
  {
    regex: hamlClassRegex,
    splitCharacter: ' '
  },
  {
    regex: componentRegex,
    splitCharacter: '='
  }
]

const stylesPatterns = [
  {
    regex: applyRegex,
    splitCharacter: ' '
  }
]

const fileTypes = [
  {
    extension: 'javascript',
    patterns: jsPatterns
  },
  {
    extension: 'javascriptreact',
    patterns: jsPatterns
  },
  {
    extension: 'typescriptreact',
    patterns: jsPatterns
  },
  {
    extension: 'html',
    patterns: htmlPatterns
  },
  {
    extension: 'hbs',
    patterns: hbsPatterns
  },
  {
    extension: 'emblem',
    patterns: hamlPatterns
  },
  {
    extension: 'haml',
    patterns: hamlPatterns
  },
  {
    extension: 'php',
    patterns: htmlPatterns
  },
  {
    extension: 'vue',
    patterns: htmlPatterns
  },
  {
    extension: 'css',
    patterns: stylesPatterns
  },
  {
    extension: 'scss',
    patterns: stylesPatterns
  }
]

module.exports = fileTypes
