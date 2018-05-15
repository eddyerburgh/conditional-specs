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

module.exports = {
  itRunIf: runIfFactory(it),
  itDoNotRunIf: runIfFactory(it, true),
  itSkipIf: skipIfFactory(it),
  itDoNotSkipIf: skipIfFactory(it, true),
  describeRunIf: runIfFactory(describe),
  describeDoNotRunIf: runIfFactory(describe, true),
  describeSkipIf: skipIfFactory(describe),
  describeDoNotSkipIf: skipIfFactory(describe, true)
};
