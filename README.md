# jazzon-lodash

> Use some lodash goodness with jazzon

## Installation

```bash
$ npm install --save jazzon-lodash
```

## Usage

The following lodash methods are availible and support passing arguments to (where applicable):

- `chunk`
- `compact`
- `drop`
- `dropRight`
- `fill`
- `first`
- `flatten`
- `flattenDeep`
- `indexOf`
- `initial`
- `last`
- `lastIndexOf`
- `pull`
- `pullAt`
- `rest`
- `slice`
- `take`
- `takeRight`
- `uniq`
- `unzip`
- `without`
- `at`
- `includes`
- `pluck`
- `sample`
- `shuffle`
- `size`
- `now`
- `gt`
- `gte`
- `isArray`
- `isBoolean`
- `isDate`
- `isEmpty`
- `isNaN`
- `isNull`
- `isNumber`
- `isObject`
- `isPlainObject`
- `isString`
- `lt`
- `lte`
- `add`
- `ceil`
- `floor`
- `max`
- `min`
- `round`
- `sum`
- `inRange`
- `random`
- `findKey`
- `findLastKey`
- `get`
- `has`
- `invert`
- `keys`
- `omit`
- `pairs`
- `pick`
- `set`
- `values`
- `camelCase`
- `capitalize`
- `deburr`
- `endsWith`
- `escape`
- `kebabCase`
- `pad`
- `padLeft`
- `padRight`
- `parseInt`
- `repeat`
- `snakeCase`
- `startCase`
- `startsWith`
- `trim`
- `trimLeft`
- `trimRight`
- `trunc`
- `unescape`
- `words`
- `uniqueId`

The following lodash methods operate solely on the current value passed into the helper. Most of them expect an array:

- `difference`
- `intersection`
- `union`
- `xor`
- `zip`
- `zipObject`
- `merge`

The template method is also supported. The template string passed in as an argument get's rendered using the current value (passed from previous helper):

- `template`

## Conflicting helper names

To avoid conflict with other helpers one can prefix all the methods with "lodash" or "_".

```
pick === _.pick === lodash.pick
```
