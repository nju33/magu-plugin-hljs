import {highlight, registerLanguage} from 'highlight.js';

const defaultOpts = {
  selector: 'pre > code[class*="lang-"]',
  selectorMatcher: /lang-([\w_-]+)/
};
export {defaultOpts};

export default function hljs(opts = {}) {
  opts = Object.assign({}, defaultOpts, opts);
  return $ => {
    const codeElems = $(opts.selector);
    codeElems.each((idx, elem) => {
      const {$elem, lang, code} = parse($, elem, opts.selectorMatcher);

      if (!lang) {
        return;
      }

      const result = highlight(lang, code);
      $elem.text(result.value);
    });
    return $;
  };
}
hljs.registerLanguage = registerLanguage;

function parse($, elem, matcher) {
  const $elem = $(elem);
  const matches = $elem.attr('class').match(matcher);
  if (!matches) {
    return {$elem: null, lang: null, code: null};
  }

  const lang = matches[1];
  const code = $elem.text();
  return {$elem, lang, code};
}
export {parse};
