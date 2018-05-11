const {
  itDoNotRunIf,
  itRunIf,
  itSkipIf,
  itDoNotSkipIf,
  describeRunIf,
  describeDoNotRunIf,
  describeSkipIf,
  describeDoNotSkipIf
} = require('./index');

beforeEach(() => {
  global.describe.mockReset();
  global.describe.skip.mockReset();
  global.describe.only.mockReset();
  global.it.mockReset();
  global.it.skip.mockReset();
  global.it.only.mockReset();
});

const fn = jest.fn();

test('itRunIf', () => {
  itRunIf(true, 'name', fn);
  expect(it).toHaveBeenCalledTimes(1);
  itRunIf(false, 'name', fn);
  expect(it).toHaveBeenCalledTimes(1);
  itRunIf.only(false, 'name', fn);
});

test('itRunIf.only', () => {
  itRunIf.only(true, 'name', fn);
  expect(it.only).toHaveBeenCalledTimes(1);
  itRunIf.only(false, 'name', fn);
  expect(it.only).toHaveBeenCalledTimes(1);
});

test('itRunIf.skip', () => {
  itRunIf.skip(true, 'name', fn);
  expect(it.skip).toHaveBeenCalledTimes(1);
  itRunIf.skip(false, 'name', fn);
  expect(it.skip).toHaveBeenCalledTimes(1);
});

test('itDoNotRunIf', () => {
  itDoNotRunIf(false, 'name', fn);
  expect(it).toHaveBeenCalledTimes(1);
  itDoNotRunIf(true, 'name', fn);
  expect(it).toHaveBeenCalledTimes(1);
});

test('itDoNotRunIf.only', () => {
  itDoNotRunIf.only(false, 'name', fn);
  expect(it.only).toHaveBeenCalledTimes(1);
  itDoNotRunIf.only(true, 'name', fn);
  expect(it.only).toHaveBeenCalledTimes(1);
});

test('itDoNotRunIf.skip', () => {
  itDoNotRunIf.skip(false, 'name', fn);
  expect(it.skip).toHaveBeenCalledTimes(1);
  itDoNotRunIf.skip(true, 'name', fn);
  expect(it.skip).toHaveBeenCalledTimes(1);
});

test('itSkipIf', () => {
  itSkipIf(false, 'name', fn);
  expect(it).toHaveBeenCalledTimes(1);
  itSkipIf(true, 'name', fn);
  expect(it).toHaveBeenCalledTimes(1);
  expect(it.skip).toHaveBeenCalledTimes(1);
});

test('itSkipIf.only', () => {
  itSkipIf.only(false, 'name', fn);
  expect(it.only).toHaveBeenCalledTimes(1);
  itSkipIf.only(true, 'name', fn);
  expect(it.only).toHaveBeenCalledTimes(1);
});

test('itSkipIf.skip', () => {
  itSkipIf.skip(false, 'name', fn);
  expect(it.skip).toHaveBeenCalledTimes(1);
  itSkipIf.skip(true, 'name', fn);
  expect(it.skip).toHaveBeenCalledTimes(2);
});

test('itDoNotSkipIf', () => {
  itDoNotSkipIf(true, 'name', fn);
  expect(it).toHaveBeenCalledTimes(1);
  itDoNotSkipIf(false, 'name', fn);
  expect(it).toHaveBeenCalledTimes(1);
  expect(it.skip).toHaveBeenCalledTimes(1);
});

test('itDoNotSkipIf.only', () => {
  itDoNotSkipIf.only(true, 'name', fn);
  expect(it.only).toHaveBeenCalledTimes(1);
  itDoNotSkipIf.only(false, 'name', fn);
  expect(it.only).toHaveBeenCalledTimes(1);
});

test('itDoNotSkipIf.skip', () => {
  itDoNotSkipIf.skip(true, 'name', fn);
  expect(it.skip).toHaveBeenCalledTimes(1);
  itDoNotSkipIf.skip(false, 'name', fn);
  expect(it.skip).toHaveBeenCalledTimes(2);
});

test('describeRunIf', () => {
  describeRunIf(true, 'name', fn);
  expect(describe).toHaveBeenCalledTimes(1);
  describeRunIf(false, 'name', fn);
  expect(describe).toHaveBeenCalledTimes(1);
});

test('describeRunIf.only', () => {
  describeRunIf.only(true, 'name', fn);
  expect(describe.only).toHaveBeenCalledTimes(1);
  describeRunIf.only(false, 'name', fn);
  expect(describe.only).toHaveBeenCalledTimes(1);
});

test('describeRunIf.skip', () => {
  describeRunIf.skip(true, 'name', fn);
  expect(describe.skip).toHaveBeenCalledTimes(1);
  describeRunIf.skip(false, 'name', fn);
  expect(describe.skip).toHaveBeenCalledTimes(1);
});

test('describeDoNotRunIf', () => {
  describeDoNotRunIf(false, 'name', fn);
  expect(describe).toHaveBeenCalledTimes(1);
  describeDoNotRunIf(true, 'name', fn);
  expect(describe).toHaveBeenCalledTimes(1);
});

test('describeDoNotRunIf.only', () => {
  describeDoNotRunIf.only(false, 'name', fn);
  expect(describe.only).toHaveBeenCalledTimes(1);
  describeDoNotRunIf.only(true, 'name', fn);
  expect(describe.only).toHaveBeenCalledTimes(1);
});

test('describeDoNotRunIf.skip', () => {
  describeDoNotRunIf.skip(false, 'name', fn);
  expect(describe.skip).toHaveBeenCalledTimes(1);
  describeDoNotRunIf.skip(true, 'name', fn);
  expect(describe.skip).toHaveBeenCalledTimes(1);
});

test('describeSkipIf', () => {
  describeSkipIf(false, 'name', fn);
  expect(describe).toHaveBeenCalledTimes(1);
  describeSkipIf(true, 'name', fn);
  expect(describe).toHaveBeenCalledTimes(1);
  expect(describe.skip).toHaveBeenCalledTimes(1);
});

test('describeSkipIf.only', () => {
  describeSkipIf.only(false, 'name', fn);
  expect(describe.only).toHaveBeenCalledTimes(1);
  describeSkipIf.only(true, 'name', fn);
  expect(describe.only).toHaveBeenCalledTimes(1);
});

test('describeSkipIf.skip', () => {
  describeSkipIf.skip(false, 'name', fn);
  expect(describe.skip).toHaveBeenCalledTimes(1);
  describeSkipIf.skip(true, 'name', fn);
  expect(describe.skip).toHaveBeenCalledTimes(2);
});

test('describeDoNotSkipIf', () => {
  describeDoNotSkipIf(true, 'name', fn);
  expect(describe).toHaveBeenCalledTimes(1);
  describeDoNotSkipIf(false, 'name', fn);
  expect(describe).toHaveBeenCalledTimes(1);
  expect(describe.skip).toHaveBeenCalledTimes(1);
});

test('describeDoNotSkipIf.only', () => {
  describeDoNotSkipIf.only(true, 'name', fn);
  expect(describe.only).toHaveBeenCalledTimes(1);
  describeDoNotSkipIf.only(false, 'name', fn);
  expect(describe.only).toHaveBeenCalledTimes(1);
});

test('describeDoNotSkipIf.skip', () => {
  describeDoNotSkipIf.skip(true, 'name', fn);
  expect(describe.skip).toHaveBeenCalledTimes(1);
  describeDoNotSkipIf.skip(false, 'name', fn);
  expect(describe.skip).toHaveBeenCalledTimes(2);
});
