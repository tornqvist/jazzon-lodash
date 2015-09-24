'use strict';

let resolve = require('path').resolve;
let test = require('tape');
let jazzon = require('jazzon');
let pkg = require('../package.json');
let plugin = require(resolve(__dirname, '..', pkg.main));

function create () {
  return jazzon.create();
}

let tests = {
  chunk: { give: ['a', 'b', 'c', 'd'], expect: [['a', 'b'], ['c', 'd']], args: [2] },
  compact: { give: [0, 1, false, 2, '', 3], expect: [1, 2, 3] },
  drop: { give: [1, 2, 3], expect: [3], args: [2] },
  dropRight: { give: [1, 2, 3], expect: [1], args: [2] },
  fill: { give: [1, 2, 3], expect: ['a', 'a', 'a'], args: ['a'] },
  first: { give: [1, 2, 3], expect: 1 },
  // flatten: { give: [1, [2, 3, [4]]], expect: [1, 2, 3, [4]] },
  flattenDeep: { give: [1, [2, 3, [4]]], expect: [1, 2, 3, 4] },
  indexOf: { give: [1, 2, 3], expect: 1, args: [2] },
  initial: { give: [1, 2, 3], expect: [1, 2] },
  intersection: { give: [[1, 2], [4, 2], [2, 1]], expect: [2] },
  lastIndexOf: { give: [1, 2, 1, 2], expect: 3, args: [2] },
  pull: { give: [1, 2, 3, 1, 2, 3], expect: [1, 1], args: [2, 3] },
  pullAt: { give: [5, 10, 15, 20], expect: [10, 20], args: [1, 3] },
  rest: { give: [1, 2, 3], expect: [2, 3] },
  slice: { give: [1, 2, 3], expect: [2, 3], args: [1] },
  take: { give: [1, 2, 3], expect: [1, 2], args: [2] },
  takeRight: { give: [1, 2, 3], expect: [2, 3], args: [2] },
  // uniq: { give: [2, 1, 2], expect: [2, 1] },
  unzip: { give: [['fred', 30, true], ['barney', 40, false]], expect: [['fred', 'barney'], [30, 40], [true, false]] },
  without: { give: [1, 2, 1, 3], expect: [3], args: [1, 2] },
  at: { give: ['barney', 'fred', 'pebbles'], expect: ['barney', 'pebbles'], args: [0, 2] },
  includes: { give: [1, 2, 3], expect: true, args: [1] },
  pluck: { give: [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }], expect: ['barney', 'fred'], args: ['user'] },
  // sample: { give: [1, 1, 1], expect: 1 },
  pluck: { give: [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }], expect: ['barney', 'fred'], args: ['user'] },
};

test('all', assert => {
  let queue = Object.keys(tests).map((helper) => {
    let args = tests[helper].args;

    return create()
      .use(plugin())
      .use(function (value) { return value || tests[helper].give; })
      .compile({
        test: `@{ give | ${ helper }(${ args && args.join(',') }) }`
      })
      .then((result) => {
        assert.deepLooseEqual(
          result.test,
          tests[helper].expect,
          `${ helper } works`);
      });
  });

  Promise.all(queue).then(() => assert.end(), assert.end);
});
