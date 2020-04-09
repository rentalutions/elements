import { frontMatter as pages } from "../pages/**/*.mdx"

export default (frontMatter) => {
  console.log(pages)
  return ({ children: content }) => {
    return <div>{content}</div>
  }
}
