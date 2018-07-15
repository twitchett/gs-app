const { JSDOM } = require('jsdom')
const Enzyme = require('enzyme')
const EnzymeAdapter = require('enzyme-adapter-react-16')

const jsdom = new JSDOM()
const { window } = jsdom

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop))
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global)

// Ignore React Web errors when using React Native
console.error = (message) => {
  return message
}

// https://github.com/Root-App/react-native-mock-render
require('react-native-mock-render/mock', { virtual: true })

Enzyme.configure({ adapter: new EnzymeAdapter() })
