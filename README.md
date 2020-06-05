![Avail Design Kit](./docs/public/design-kit-cover.png)

# Avail Design Kit

A set of components built to be `composable`, `extendable`, and `usable`

## [Documentation](https://design.avail.co)

## Contributing

The best way to contribute to this library is to look at open issues or file an issue yourself if one doesn't already exist.

To suggest a component be added to the library open an issue and spec out the component with it's API. No component will be added without proper documentation. You can tag @pkrawc or @wade00 with reviewing the issue and weighing in when necessary.

To finish, create a pull request that solves the issue. At least one commit in the PR should be `resolves #[ISSUE_NUMER]`, this will auto-close the issue when the PR is merged into master.

### Conventional Commits

This system uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to tag and track updates. This method automatically creates and updates changelogs for each package based on the name of a commit. The basis of this is that the commit message should contain the following structure.

```bash
<type>([optional scope]): <description>

[optional body]

[optional footers]
```

**Available types for commits**

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

## Releases

Current release process, it's kind of involved, but github actions does most of the heavy lifting and it creates a nice release cadence. These scripts assume you're already on the `master` branch. If you're on a feature branch, create a pull request to merge your code.

```bash
# First run a build and make sure everything compiles, and run tests to make sure all are passing
yarn build && yarn test

# Create a new version of the packages worked on, git tag, and create a CHANGELOG for those package.
yarn update [patch|minor|major]

# If everything looks kosher, push to Github.
git push origin master --follow-tags
```
