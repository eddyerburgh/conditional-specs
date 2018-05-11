function runIfFactory(method, reverse) {
  var fn = function runIf(condition, name, fn) {
    if (reverse ? !condition : condition) {
      method(name, fn);
    }
  };

  fn.only = function only(condition, name, fn) {
    if (reverse ? !condition : condition) {
      method.only(name, fn);
    }
  };

  fn.skip = function skip(condition, name, fn) {
    if (reverse ? !condition : condition) {
      method.skip(name, fn);
    }
  };

  return fn;
}

function skipIfFactory(method, reverse) {
  var fn = function skipIf(condition, name, fn) {
    if (reverse ? !condition : condition) {
      method.skip(name, fn);
    } else {
      method(name, fn);
    }
  };

  fn.only = function only(condition, name, fn) {
    if (reverse ? !condition : condition) {
      method.skip(name, fn);
    } else {
      method.only(name, fn);
    }
  };

  fn.skip = function skip(condition, name, fn) {
    if (reverse ? !condition : condition) {
      method.skip(name, fn);
    } else {
      method.skip(name, fn);
    }
  };

  return fn;
}

var itRunIf = runIfFactory(it);
var itDoNotRunIf = runIfFactory(it, true);
var describeRunIf = runIfFactory(describe);
var describeDoNotRunIf = runIfFactory(describe, true);

var itSkipIf = skipIfFactory(it);
var itDoNotSkipIf = skipIfFactory(it, true);
var describeSkipIf = skipIfFactory(describe);
var describeDoNotSkipIf = skipIfFactory(describe, true);

module.exports = {
  itDoNotRunIf,
  itRunIf,
  itSkipIf,
  itDoNotSkipIf,
  describeRunIf,
  describeDoNotRunIf,
  describeSkipIf,
  describeDoNotSkipIf
};
