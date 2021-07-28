const fs = require("fs")
const path = require("path")
const format = require("prettier-eslint")
const upperCamelCase = require("uppercamelcase")
const cheerio = require("cheerio")
const { minify } = require("html-minifier")

const svgFolder = path.resolve(__dirname, "../svg")
const iconsFoler = path.resolve(__dirname, "../src/icons")

const svgs = fs.readdirSync(svgFolder)

const icons = svgs.reduce((icons, file) => {
  const name = path.basename(file, ".svg")
  const svg = fs.readFileSync(path.resolve(svgFolder, file), {
    encoding: "utf8",
  })
  const contents = cheerio.load(svg)("svg").html()
  icons[name] = minify(contents)
  return icons
}, {})

const keys = Object.keys(icons)

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
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

fs.writeFileSync(path.join(__dirname, "src", "index.js"), "", "utf-8")
fs.writeFileSync(
  path.join(__dirname, "src", "index.d.ts"),
  initialTypeDefinitions,
  "utf-8"
)

keys.forEach((name) => {
  const location = path.join(iconsFoler, `${name}.js`)
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

  const component = format({
    text: element,
    eslintConfig: {
      extends: "airbnb",
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: false,
      parser: "flow",
    },
  })

  fs.writeFileSync(location, component, "utf-8")

  console.log("Built", ComponentName)

  const exportString = `export * from "./icons/${name}"\r\n`

  fs.appendFileSync(
    path.join(__dirname, "src", "index.js"),
    exportString,
    "utf-8"
  )

  const exportTypeString = `export const ${ComponentName}: Icon;\n`

  fs.appendFileSync(
    path.join(__dirname, "src", "index.d.ts"),
    exportTypeString,
    "utf-8"
  )
})
