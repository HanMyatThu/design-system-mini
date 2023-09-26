
import type { JestConfigWithTsJest } from 'ts-jest'
import BabelConfig from './babel.config'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./setupTests.ts"],
  transform: {
    '^.+\\.(tsx|ts)?$': [
      'ts-jest',
      {
        babelConfig: BabelConfig,
      },
    ],
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  modulePathIgnorePatterns: ["<rootDir>/lib"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
}

export default jestConfig