![Avail Design Kit](./docs/public/design-kit-cover.png)

# Avail Design Kit

A set of components built to be `composable`, `extendable`, and `usable`

## [Documentation](https://design.avail.co)

## Setup

1. Clone the repo with `gh repo clone rentalutions/elements`.
2. Install dependencies with `yarn install`.
3. Start a storybook container that builds all the packages and watches for changes with `yarn start`.

## Project Structure

This project is structured as a monorepo managed by [lerna](https://github.com/lerna/lerna) and yarn workspaces.

```
.storybook
docs
└── pages
|   └── packages
|   |   └── [package-documentation].mdx
└── next.config.js
packages
└── [package]
│   └── dist
│   └── src
│   └── __tests__
│   └── [package].stories.js
│   └── package.json
│   └── CHANGELOG.md
#testing.js
```

## Contributing

The best way to contribute to this library is to look at open issues or file an issue yourself if one doesn't already exist.

To suggest a component be added to the library open an issue and spec out the component with it's API. No component will be added without proper documentation. You can tag [@pkrawc](https://github.com/pkrawc) or [@wade00](https://github.com/wade00) with reviewing the issue and weighing in when necessary.

To finish, create a pull request that solves the issue. At least one commit in the PR should be `resolves #[ISSUE_NUMER]`, this will auto-close the issue when the PR is merged into master.

### Conventional Commits

This system uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to tag and track updates. This method automatically creates and updates change logs for each package based on the name of a commit. The basis of this is that the commit message should contain the following structure.

```bash
<type>([optional scope]): <description>

[optional body]

[optional footers]
```

**Commit Types**

`build`, `ci`, `chore`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`

## Releases

Current release process, it's kind of involved, but github actions does most of the heavy lifting and it creates a nice release cadence. These scripts assume you're already on the `release` branch. If you're on a feature branch, create a pull request to merge your code.

```bash
# First run a build and make sure everything compiles, and run tests to make sure all are passing
yarn build && yarn test

# Create new versions of the packages worked on, git tag, and create a CHANGELOG for those package.
yarn lerna version

# If everything looks kosher, push to Github.
git push origin release --follow-tags
```

### Beta releases

Sometimes you'll want to release a beta version of a package before upgrading to production level. This process is slightly more manual but made pretty easy with lerna and yarn workspaces.

```bash
# Update the packages to a prerelease
yarn workspace [package-name] version [--preminor | --premajor | --prepatch]

# Publish the package on the npm registry
yarn workspace [package-name] publish --tag [alpha | beta]
```

## Adding Packages

Use the command `yarn create-package [package-name] [package description]`.

```bash
yarn create-package footer "A footer package for the avail design system"
```

## Code Preferences

### Separate component logic from layout when possible.

```jsx
// Good
function useComponent({ ref, ...props }) {
  const innerRef = useRef()
  const [bg, setBg] = useState("#000")
  useEffect(() => {
    if (window.innerWidth > 900) setBg("#FFF")
  }, [])
  return {
    ...props,
    bg,
    ref: mergeRefs(innerRef, ref),
  }
}
function Component(props, ref) {
  const { bg, ...htmlProps } = useComponent({ ...props, ref })
  return <Box {...htmlProps} sx={{ bg }} />
}

// Bad
function Component(props, ref) {
  const innerRef = useRef()
  const [bg, setBg] = useState("#000")
  useEffect(() => {
    if (window.innerWidth > 900) setBg("#FFF")
  }, [])
  return <Box {...props} ref={mergeRefs(innerRef, ref)} sx={{ bg }} />
}
```

Yes it's more lines for a trivial example like this but in my experience it makes the component so much more refactorable.

### Prefer function declarations over assignments for component definition.

```jsx
// Good
function MyComponent(props) {
  return <div />
}

// Bad
const MyComponent = (props) => <div />
```

### Prefer named exports.

```js
// Good
export function Section() {}
export function SectionItem() {}

// Bad
export default function Section() {}
export function SectionItem() {}
```

## Naming Conventions

Name files in lowercase with hyphen seperation for spaces.

```zsh
# Good
touch components/file-upload.js

# Bad
touch components/FileUpload.js
```
