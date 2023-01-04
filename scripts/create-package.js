const { spawn } = require("child_process")
const { writeFileSync, readdirSync, renameSync } = require("fs")
const { cp } = require("shelljs")

const name = process.argv[2]

if (!name) throw Error("Must contain a name argument.")

const description = process.argv[3] || `Avail design system package for ${name}`

const packageJson = `
{
  "license": "MIT",
  "name": "@rent_avail/${name}",
  "version": "0.0.1",
  "description": "${description}",
  "source": "src/index.ts",
  "main": "dist/index.js",
  "umd:main": "dist/index.umd.js",
  "module": "dist/index.mjs",
  "exports": {
    "require": "./dist/index.js",
    "default": "./dist/index.modern.mjs"
  },
  "types": "dist/index.d.ts",   
  "files": [
    "dist"
  ],
  "scripts": {
    "test": "echo 'run tests from the root directory'",
    "build": "microbundle --jsx React.createElement",
    "watch": "microbundle watch --no-compress --jsx React.createElement",
    "prepare": "yarn build"
  },
  "publishConfig": {
    "access": "public"
  },
  "contributors": [
    "Patrick Krawczykowski <patrick@dreadful.design>"
  ],
  "peerDependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0",
    "react-is": "^17.0.0",
    "styled-components": "^5.1.1"
  }
}
`

const packages = readdirSync("./packages")

if (!packages.includes(name)) {
  console.log(`Creating file structure for ${name}...`)
  cp("-r", "template", `packages/${name}`)
  writeFileSync(`packages/${name}/package.json`, packageJson)
  renameSync(
    `packages/${name}/stories/package.stories.tsx`,
    `packages/${name}/stories/${name}.stories.tsx`
  )
  renameSync(
    `packages/${name}/tests/package.test.tsx`,
    `packages/${name}/tests/${name}.test.tsx`
  )
  spawn("yarn")
}
