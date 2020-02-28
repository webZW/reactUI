// const camelCase = (name: string) => {
//    return name.charAt(0).toUpperCase() + name.slice(1).replace(/-(\w)/g, (m, n) => n.toUpperCase());
//  }
 
//  const req = (require as any).context('.', true, /^\.\/([^_][\w-]+)\/index\.tsx?$/);
 
//  console.log(111111, 'req: ',  req.keys());
 
//  req.keys().forEach((mod: string) => {
//    let v = req(mod);
//    if (v && v.default) {
//      v = v.default;
//    }
//    const match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);
//    if (match && match[1]) {
//      if (match[1] === 'message' || match[1] === 'notification') {
//        // message & notification should not be capitalized
//        exports[match[1]] = v;
//      } else {
//        exports[camelCase(match[1])] = v;
//      }
//    }
//  });
 
//  module.exports = require('.');
 

import Button from './button'
import Icon from './icon'
export {
  Button, Icon
}
export default { Button }