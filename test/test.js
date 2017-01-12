import fs from 'fs';
import test from 'ava';
import marked from 'marked';
import cheerio from 'cheerio';
import {defaultOpts, parse} from '../dist/magu-plugin-hljs';

const md = fs.readFileSync(`${__dirname}/fixtures.md`, 'utf-8');

test('parse', t => {
  const $ = cheerio.load(marked(md));
  const parsed =
    parse($, $(defaultOpts.selector).first(), defaultOpts.selectorMatcher);
  t.truthy(parsed.$elem);
  t.is(parsed.$elem[0].name, 'code');
  t.truthy(parsed.lang);
  t.is(parsed.lang, 'js');
  t.truthy(parsed.code);
  t.is(parsed.code, `console.log('aiueo');\n`);
});

test('`parse` is return null matcher is null', t => {
  const $ = cheerio.load(marked(md));
  const parsed = parse($, $(defaultOpts.selector).first(), /foo/);
  t.falsy(parsed.lang);
  t.is(parsed.lang, null);
});
