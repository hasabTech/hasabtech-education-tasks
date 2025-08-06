module.exports = {
  testEnvironment: 'node',
  testMatch: [
    "<rootDir>/js-basics/tests/**/*.test.js",
    "<rootDir>/js-intermediate/tests/**/*.test.js",
    "<rootDir>/js-advanced/tests/**/*.test.js"
  ],
  collectCoverageFrom: [
    "js-basics/tasks/**/*.js",
    "js-intermediate/tasks/**/*.js",
    "js-advanced/tasks/**/*.js",
    "!**/node_modules/**"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  verbose: true
};
