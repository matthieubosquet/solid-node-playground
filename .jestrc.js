module.exports = {
  preset: "ts-jest",
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageReporters: ["text"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFiles: ["<rootDir>/test/setup_environment.ts"],
};
