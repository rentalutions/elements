![Avail Design Kit](./docs/public/design-kit-cover.png)

# Avail Design Kit

A set of components built to be `composable`, `extendable`, and `usable`

## [Documentation](https://design.avail.co)

## Contributing

The best way to contribute to this library is to look at open issues or file an issue yourself if one doesn't already exist.

To suggest a component be added to the library open an issue and spec out the component with it's API. No component will be added without proper documentation. You can tag @pkrawc or @wade00 with reviewing the issue and weighing in when necessary.

To finish, create a pull request that solves the issue. At least one commit in the PR should be `resolves #[ISSUE_NUMER]`, this will auto-close the issue when the PR is merged into master.

## Releases

Current release process, it's kind of involved, but github actions does most of the heavy lifting and it creates a nice release cadence. These scripts assume you're already on the `master` branch. If you're on a feature branch, create a pull request to merge your code.

```bash
# First run a build and make sure everything compiles, and run tests to make sure all are passing
yarn build && yarn test

# Generate a changelog for the release.
yarn changes

# Create a new version of the package(s) that you worked on and git tag locally.
yarn update

# If everything looks kosher, push to Github.
git push origin master --follow-tags
```

Paste the changelog into the release created by the tag and publish it. A github action should run to build the tag and publish to npm.
