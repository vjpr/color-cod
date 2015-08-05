<h1 align="center">
<img src="https://cdn.rawgit.com/vjpr/color-cod/master/logo.svg" alt="color-cod">
</h1>

> Color code identical strings with the same color.

## Install

```js
npm i -S color-cod
```

## Usage

```js
const colorCod = require('color-cod')()

console.log(colorCod('foo'))
console.log(colorCod('bar'))
console.log(colorCod('foo'))
```

```
E.g.

foo <- blue
bar <- yellow
foo <- blue
```

Global color coding.

```js
import colorCod from 'color-cod'
console.log(colorCod('foo'))
...

## API

`require('colorCod')()`

Create a new coder

``

## License

[MIT](http://vjpr.mit-license.org)
