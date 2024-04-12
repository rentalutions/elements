import fs from "fs"
import path from "path"
import format from "prettier-eslint"
import upperCamelCase from "uppercamelcase"
import { load as loadSvg } from "cheerio"
import { minify } from "html-minifier"

const svgDirectory = path.resolve(__dirname, "../svg")
const svgFiles = fs.readdirSync(svgDirectory)

const icons = svgFiles.reduce((icons, file) => {
  const name = path.basename(file, ".svg")
  const svg = fs.readFileSync(path.resolve(svgDirectory, file), {
    encoding: "utf8",
  })
  const contents = loadSvg(svg)("svg").html()
  if (!contents) {
    return icons
  }

  icons[name] = minify(contents)
  return icons
}, {})

const sourceDir = path.resolve(__dirname, "../src")
const iconDirectory = path.resolve(sourceDir, "icons")
const keys = Object.keys(icons)

if (!fs.existsSync(iconDirectory)) {
  fs.mkdirSync(iconDirectory)
}

const initialTypeDefinitions = `
/// <reference types="react" />
import { FC, SVGAttributes } from 'react';
export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
export type Icon = FC<IconProps>;
`

fs.writeFileSync(path.resolve(sourceDir, "index.js"), "", "utf-8")
fs.writeFileSync(
  path.resolve(sourceDir, "index.d.ts"),
  initialTypeDefinitions,
  "utf-8"
)

keys.forEach(async (name) => {
  const location = path.resolve(iconDirectory, `${name}.js`)
  const ComponentName = upperCamelCase(name)
  const element = `
    import React, { forwardRef } from "react"
    import p from "prop-types"
    export const ${ComponentName} = forwardRef(function ${ComponentName}(props, ref) {
      const { color = "currentColor", size = 24, ...rest } = props
      return (
        <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
          ${icons[name]}
        </svg>
      )
    })

    ${ComponentName}.propTypes = {
      color: p.string,
      size: p.oneOfType([
        p.string,
        p.number
      ]),
    }

    ${ComponentName}.defaultProps = {
      viewBox: "0 0 24 24",
      fill: "none",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }
    
    ${ComponentName}.displayName = "${ComponentName}"
  `

  const component = await format({
    text: element,
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: false,
      parser: "flow",
    },
  })

  fs.writeFileSync(location, component, "utf-8")

  console.log("Built", ComponentName)

  const exportString = `export * from "./icons/${name}"\r\n`
  const exportTypeString = `export const ${ComponentName}: Icon;\n`

  fs.appendFileSync(path.join(sourceDir, "index.js"), exportString, "utf-8")
  fs.appendFileSync(
    path.join(sourceDir, "index.d.ts"),
    exportTypeString,
    "utf-8"
  )
})
