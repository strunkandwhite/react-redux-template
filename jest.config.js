module.exports = {
  testURL: 'http://localhost:8080',
  moduleNameMapper: {
    '^Src(.*)$': '<rootDir>/src$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  roots: ['<rootDir>/src/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/main.jsx',
    '<rootDir>/src/redux/(root-reducer|store).js',
    '/node_modules/',
    '/test-helpers/',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/test-helpers/setup-tests.js',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
}
