const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    ...(compilerOptions.paths
      ? pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" })
      : {}),
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/dist/" // 빌드 파일 무시
  ],
  testPathIgnorePatterns: [
    "<rootDir>/dist/" // 빌드 디렉토리 무시
  ],
};
