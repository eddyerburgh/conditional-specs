# conditional-specs

Conditional spec methods for test suites that run in multiple environments.

Can be used with [Mocha](https://mochajs.org/) or [Jest](https://facebook.github.io/jest/).

## Examples

```js
import {
  itDoNotRunIf,
  describeRunIf
} from 'mocha-conditionals'

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

Install with mocha:

```
npm install --save-dev mocha mocha-conditionals
```

Use in test files:

```js
import {
  itDoNotSkipIf,
  describeRunIf
} from 'mocha-conditionals'

describeRunIf(process.env.TEST_ENV === 'browser', '#find()', () => {
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
