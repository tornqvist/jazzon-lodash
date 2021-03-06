'use strict';

const lodash = require('lodash');

module.exports = function (options) {
  options = (options || {});

  let prefix;

  if (options.prefix) {
    prefix = new RegExp(`^(?:${ lodash.escapeRegExp(options.prefix) })`);
  } else {
    prefix = /^(?:(?:(?:[lodash]+)|_)\.)?/;
  }

  return function (state, helper, args) {
    /**
     * Remove any leading lodash. or _. from helper name
     */

    if (!prefix.test(helper)) {
      return state;
    }

    helper = helper.replace(prefix, '');

    switch (helper) {
    case 'chunk':
    case 'compact':
    case 'drop':
    case 'dropRight':
    case 'fill':
    case 'first':
    case 'flatten':
    case 'flattenDeep':
    case 'indexOf':
    case 'initial':
    case 'last':
    case 'lastIndexOf':
    case 'pull':
    case 'pullAt':
    case 'rest':
    case 'slice':
    case 'take':
    case 'takeRight':
    case 'uniq':
    case 'unzip':
    case 'without':
    case 'at':
    case 'includes':
    case 'pluck':
    case 'sample':
    case 'shuffle':
    case 'size':
    case 'now':
    case 'gt':
    case 'gte':
    case 'isArray':
    case 'isBoolean':
    case 'isDate':
    case 'isEmpty':
    case 'isNaN':
    case 'isNull':
    case 'isNumber':
    case 'isObject':
    case 'isPlainObject':
    case 'isString':
    case 'lt':
    case 'lte':
    case 'add':
    case 'ceil':
    case 'floor':
    case 'max':
    case 'min':
    case 'round':
    case 'sum':
    case 'inRange':
    case 'random':
    case 'findKey':
    case 'findLastKey':
    case 'get':
    case 'has':
    case 'invert':
    case 'keys':
    case 'omit':
    case 'pairs':
    case 'pick':
    case 'set':
    case 'values':
    case 'camelCase':
    case 'capitalize':
    case 'deburr':
    case 'endsWith':
    case 'escape':
    case 'kebabCase':
    case 'pad':
    case 'padLeft':
    case 'padRight':
    case 'parseInt':
    case 'repeat':
    case 'snakeCase':
    case 'startCase':
    case 'startsWith':
    case 'trim':
    case 'trimLeft':
    case 'trimRight':
    case 'trunc':
    case 'unescape':
    case 'words':
    case 'uniqueId':
      /**
       * Helpers that expects a value and possible arguments
       */

      args = (format(args) || []);

      if (state !== null) {
        args.unshift(state);
      }

      return lodash[helper].apply(lodash, args);
    case 'difference':
    case 'intersection':
    case 'union':
    case 'xor':
    case 'zip':
    case 'zipObject':
    case 'merge':
      /**
       * Helpers that expect a number of arguments to operate on
       */

      return lodash[helper].apply(lodash, state);
    case 'template':
      /**
       * Custom support for template
       */

      return lodash.template(args[0])(state);
    default:
      return state;
    }
  };
};

function format(arr) {
  return (arr && arr.map(value => isNaN(value) ? value : +value));
}
