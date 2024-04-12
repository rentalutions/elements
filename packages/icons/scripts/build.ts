import fs from "fs/promises"
import path from "path"
import format from "prettier-eslint"
import upperCamelCase from "uppercamelcase"
import { load as loadSvg } from "cheerio"
import { minify } from "html-minifier"

type Icon = Readonly<{
  name: string
  content: string
  deprecated?: boolean
}>

const FILE_ENCODING = "utf-8"

const ROOT_DIR = path.resolve(__dirname, "..")
const SVG_DIR = path.join(ROOT_DIR, "svg")

const SOURCE_DIR = path.join(ROOT_DIR, "src")
const ICON_DIR = path.join(SOURCE_DIR, "icons")

;(async () => {
  await prepareIconsDir()

  const icons = await loadIcons()

  await createIconComponents(icons)
  await createExportFile(icons)
  await createTypeFile(icons)
})()

async function loadIcons(): Promise<Array<Icon>> {
  // recursively loads all svg icons from svg folder
  const svgFolder = await fs.readdir(SVG_DIR, {
    recursive: true,
  })

  return Promise.all(
    svgFolder
      // filter out everything that is not an SVG
      .filter((svg) => svg.includes(".svg"))
      .map(async (svg) => ({
        name: path.basename(svg, ".svg"),
        deprecated: path.dirname(svg) === "deprecated",
        content: await fs.readFile(path.resolve(SVG_DIR, svg), {
          encoding: FILE_ENCODING,
        }),
      }))
  )
}

async function prepareIconsDir() {
  console.log("📁 Preparing Icons Folder.")

  // checks if we have permissions to read and write to the folder
  await fs
    .access(ICON_DIR, fs.constants.W_OK | fs.constants.R_OK)
    // remove folder if exists and permissions are ok
    .then(() => fs.rm(ICON_DIR, { recursive: true }))
    .catch((error) =>
      console.log(
        error.code === "ENOENT"
          ? "📂 Icons folder doesn't exist. Creating..."
          : error?.message
      )
    )
    // try to (re)create folder
    .finally(() => fs.mkdir(ICON_DIR))

  console.log("✅ Icons folder is ready!")
}

async function createIconComponents(icons: Array<Icon>) {
  console.log(`🔮 Generating icons...`)

  await Promise.all(
    icons.map(async ({ name, content, deprecated }) => {
      const location = path.resolve(ICON_DIR, `${name}.js`)
      const ComponentName = upperCamelCase(name)

      const component = await format({
        text: createJsxTemplate(ComponentName, content, deprecated),
        prettierOptions: {
          bracketSpacing: true,
          singleQuote: false,
          parser: "flow",
        },
      })

      await fs.writeFile(location, component, FILE_ENCODING)
    })
  )

  console.log(`✅ Icons have been generated! (${icons.length})`)
}

async function createExportFile(icons: Array<Icon>) {
  console.log("📦 Generating export file...")

  await fs.writeFile(
    path.join(SOURCE_DIR, "index.js"),
    icons.map(({ name }) => `export * from "./icons/${name}"`).join("\n"),
    FILE_ENCODING
  )

  console.log("✅ Export file have been generated!")
}

async function createTypeFile(icons: Array<Icon>) {
  console.log("🏭 Generating types...")

  const typescript = `
/// <reference types="react" />
import { FC, SVGAttributes } from 'react';
export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
export type Icon = FC<IconProps>;
${icons
  .flatMap(({ name, deprecated }) => [
    ...(deprecated ? ["/** @deprecated */"] : []),
    `export const ${upperCamelCase(name)}: Icon;`,
  ])
  .join("\n")}
`

  await fs.writeFile(
    path.join(SOURCE_DIR, "index.d.ts"),
    typescript,
    FILE_ENCODING
  )

  console.log("✅ Types have been generated!")
}

function createJsxTemplate(
  IconName: string,
  content: string,
  deprecated = false
): string {
  const path = loadSvg(content)("svg").html()

  if (!path) {
    throw Error(`${IconName} has invalid content!`)
  }

  const element = `
    import React, { forwardRef } from "react"
    import p from "prop-types"${deprecated ? "\n/** @deprecated */" : ""}
    export const ${IconName} = forwardRef(function ${IconName}(props, ref) {
      const { color = "currentColor", size = 24, ...rest } = props
      return (
        <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
          ${minify(path)}
        </svg>
      )
    })

    ${IconName}.propTypes = {
      color: p.string,
      size: p.oneOfType([
        p.string,
        p.number
      ]),
    }

    ${IconName}.defaultProps = {
      viewBox: "0 0 24 24",
      fill: "none",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }
    
    ${IconName}.displayName = "${IconName}"
    ${deprecated ? `${IconName}.deprecated = true` : ""}
  `

  return element
}
