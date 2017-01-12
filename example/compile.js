import magu from 'magu';
import hljs from '../dist/magu-plugin-hljs';

magu({
}, [hljs()])
  .process(`${__dirname}/example.md`)
  .then(result => {
    console.log(result.html);
  });
