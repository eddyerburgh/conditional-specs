# conditional-specs

Conditional spec methods for test suites that run in multiple environments.

Can be used with [Mocha](https://mochajs.org/) or [Jest](https://facebook.github.io/jest/).

## Example

```js
import {
  itDoNotRunIf,
  describeRunIf
} from 'conditional-specs'

describe('#find()', () => {
  itDoNotRunIf(BROWSER === 'phantomJS', 'returns node matching :not selector', () => {
    // ..
  });

  it('returns node matching class selector', () => {
    // ..
  })
})

describeRunIf(TEST_ENV === "node", "#findAll()", () => {
  // ..
});
```
## Usage

Install with yarn:

```
yarn add --dev mocha-conditionals
```

or npm:

```
npm install --save-dev mocha-conditionals
```

Use in test files:

```js
import {
  itDoNotSkipIf,
  describeRunIf
} from 'conditional-specs'

describeRunIf(process.env.TEST_ENV === 'browser', '#find()', () => {
  // ..
})
```

You can add `skip` and `only` to tests:

```js
describeRunIf.only(process.env.TEST_ENV === 'browser', '#find()', () => {
  // ..
})

describeSkipIf.skip(process.env.TEST_ENV === 'browser', '#find()', () => {
  // ..
})
```

## API

`itDoNotRunIf(condition, name, fn)`
`itRunIf(condition, name, fn)`
`itDoNotSkipIf(condition, name, fn)`
`itSkipIf(condition, name, fn)`

`describeDoNotRunIf(condition, name, fn)`
`describeRunIf(condition, name, fn)`
`describeDoNotSkipIf(condition, name, fn)`
`describeSkipIf(condition, name, fn)`

## Why?

Some libraries are designed to run in multiple environments. If behavior changes across those environments, tests need to be conditional. 

`conditional-specs` provides methods to write easy-to-read conditional tests.