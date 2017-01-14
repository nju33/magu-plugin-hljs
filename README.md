# magu-plugin-hljs

[Magu](https://github.com/nju33/magu) plugin that highlight code block use the Highlight.js

[![Build Status](https://travis-ci.org/nju33/magu-plugin-hljs.svg?branch=master)](https://travis-ci.org/nju33/magu-plugin-hljs) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

## Install

```bash
yarn add magu-plugin-hljs
npm install magu-plugin-hljs
```

## Usage

```js
magu({}, [hljs({
  // Below is the default value
  selector: 'pre > code[class*="lang-"]',
  selectorMatcher: /lang-([\w_-]+)/
})])
  .process(`${__dirname}/path/to/file.md`)
  .then(result => console.log(result.html));
```

### Register custom language

Use `require('magu-plugin-hljs').registerLanguage`.
It is the same as `registerLanguage` of Highlight.js.
Please refer to [highlightjs.readthedocs.io/en/latest/api.html#registerlanguage-name-language](http://highlightjs.readthedocs.io/en/latest/api.html#registerlanguage-name-language).

## Options

- `selector` (default:`'pre > code[class*="lang-"]'`)
  <div>Selector for obtaining code block elements</div>
- `selectorMatcher` (default:`/lang-([\w_-]+)/`)
  <div>Regular expression for getting the name of the language from element class</div>

## Example

The following `.` is simply to make it uninterrupted there.

```md
```js
console.log('aiueo');
```.

```css
body {
  color: orange;
}
```.
```

result like this.

```html
<pre><code class="lang-js">console.log(&amp;#39;aiueo&amp;#39;);
</code></pre>
<pre><code class="lang-css"><span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">color</span>: orange;
}
</code></pre>
```

## License

The MIT License (MIT)
Copyright (c) 2016 nju33 <nju33.ki@gmail.com>
