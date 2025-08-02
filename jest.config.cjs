module.exports = {
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],

  moduleNameMapper: {
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@context/(.*)$": "<rootDir>/src/context/$1",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
  },

  moduleDirectories: ['node_modules', '<rootDir>/src'],

  testMatch: [
    '<rootDir>/**/*.test.ts',
    '<rootDir>/**/*.test.tsx'
  ],

  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.app.json',
        isolatedModules: true,
        module: 'ESNext',
        jsx: 'react-jsx',
      },
    ],
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  resolver: 'ts-jest-resolver',

  collectCoverage: false,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/*.test.{ts,tsx}',
    '!<rootDir>/src/main.tsx',
  ],
};