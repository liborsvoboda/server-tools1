test.assert.assert = def(
  [
    test.assert.compare
  ],

  function (compare) {
    var eq = function (expected, actual, message) {
      var result = compare.compare(expected, actual);
      if (!result.eq) {
        if (message !== undefined)
          throw new Error(message);
        else
          throw new Error(result.why);
      }
    };

    var throws = function (f, expected, message) {
      var token = {};

      try {
        f();
        throw token;
      } catch (e) {
        if (e === token)
          throw new Error(message);
        if (expected !== undefined)
          eq(expected, e, message);
      }
    };

    var throwsError = function (f, expected, message) {
      var token = {};

      try {
        f();
        throw token;
      } catch (e) {
        if (e === token)
          throw new Error(message);
        if (expected !== undefined)
          eq(expected, e.message, message);
      }
    }

    var succeeds = function (f, message) {
      try {
        f();
      } catch (e) {
        throw new Error(message);
      }
    };

    var fail = function (message) {
      if (message !== undefined)
        throw new Error(message);
      else
        throw new Error('Test failed.');
    };

    var html = function (expected, actual, message) {
      return {
        expected: expected,
        actual: actual,
        message: message
      };
    };

    return {
      eq: eq,
      throws: throws,
      throwsError: throwsError,
      succeeds: succeeds,
      fail: fail,
      html: html
    };
  }
);
