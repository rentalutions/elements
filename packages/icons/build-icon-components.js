const path = require("path")
const fs = require("fs")
const format = require("prettier-eslint")
const upperCamelCase = require("uppercamelcase")
const featherIcons = require("feather-icons/dist/icons.json")
const customIcons = require("./icons/data.json")

const featherKeys = Object.keys(featherIcons)

const customKeys = Object.keys(customIcons)

const icons = [...featherKeys, ...customKeys]

const dir = path.join(__dirname, "src/icons")

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

const attrsToString = (attrs) => {
  return Object.keys(attrs)
    .map((key) => {
      if (key === "width" || key === "height" || key === "stroke") {
        return key + "={" + attrs[key] + "}"
      }
      if (key === "rest") {
        return "{...rest}"
      }
      return key + '="' + attrs[key] + '"'
    })
    .join(" ")
}

icons.forEach((i) => {
  const location = path.join(__dirname, "src/icons", `${i}.js`)
  const ComponentName = upperCamelCase(i)
  const defaultAttrs = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "size",
    height: "size",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "color",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    rest: "...rest",
  }

  const element = `
    import React, { forwardRef } from 'react'
    import p from 'prop-types'

    export const ${ComponentName} = forwardRef(function ${ComponentName}(props, ref) {
      const { color = "currentColor", size = 24, ...rest } = props
      return (
        <svg ref={ref} ${attrsToString(defaultAttrs)}>
          ${featherIcons[i]}
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
    ${ComponentName}.displayName = '${ComponentName}'
  `

  const component = format({
    text: element,
    eslintConfig: {
      extends: "airbnb",
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: "flow",
    },
  })

  fs.writeFileSync(location, component, "utf-8")

  console.log("Successfully built", ComponentName)

  const exportString = `export * from './icons/${i}';\r\n`

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
