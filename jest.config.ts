import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import tsconfig from './tsconfig.json';

const config: Config = {
  testPathIgnorePatterns: ["/node_modules/", "/template/"],
  transformIgnorePatterns: ["/node_modules/", "<rootDir>/packages/*./dist/"],
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "packages", "utils"],
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  coveragePathIgnorePatterns: [
    '<rootDir>/.*/*\\.bundle\\.js$',
    '<rootDir>/.*/*\\.dist$',
  ],
  coverageDirectory: './coverage',
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};

export default config;
