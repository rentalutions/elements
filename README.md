# Do not deprecate elements from this library without warning or following true semvar. This is a public package.

If you find elements breaking your build, make sure all peerDependencies are installed or that youre importing each components directly

`import Avatar from "@rentalutions/elements/lib/Avatar"`

# A Set of Reusable Components

**Documentation needed**

### Components included in package

1. Avatar
1. Button
1. Card
1. Container
1. Dropdown
1. Field
1. Icon
1. Image
1. Loader
1. Text
1. Tooltip

## TODO:

* move all variables into styled components theme provider so they can be overwritten easier

## Contributing

#### Make sure you align your contribution with the Style Guide

1. Submit a PR
2. On approval, merge into master
3. Pull master locally.
4. `npm version <major|minor|patch> -m "tell us about the change"`
5. `git push origin master && git push origin v<version-npm-gives-you>`
