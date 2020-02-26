export const omit = (obj: Record<string, any>, arr: string[]): Record<string, any> => {
   const newObj: Record<string, any> = {};
   const arrStr = JSON.stringify(arr)
   Object.keys(obj).map( key => {
      if (!new RegExp(key, 'g').test(arrStr)) newObj[key] = obj[key];

      return null;
   } )

   return newObj;
}

const toStringFun = Object.prototype.toString;
const StringMap: Record<string, string> = {
'[object Boolean]' : 'boolean',
'[object Number]' : 'number',
'[object String]' : 'string',
'[object Function]' : 'function',
'[object Array]' : 'array',
'[object Date]' : 'date',
'[object RegExp]' : 'regExp',
'[object Undefined]': 'undefined',
'[object Null]' : 'null',
'[object Object]' : 'object'
};

export const classNames = (...classes: (string | any[] | undefined | Record<string, boolean>)[]) => {
   let str = '';

   str = classesMap({ classes, index: 0, str});

   return str;
}
const classesMap = ({ classes, index, str }: Record<string, any>): any => {
   // console.log('classesMap: ', 'str: ', str, 'classes: ', classes[index]);
   str = dealConfig[StringMap[toStringFun.call(classes[index])]](str, classes[index])
   if (classes.length - 1 === index) return str
   else return classesMap({ classes, index: index + 1, str })
}

const classArr = (preStr: string, newStr: any[]) => classesMap({ classes: newStr, index: 0, str: preStr});

const classObj = (preStr: string, newStr: Record<string, any>) => {
   let str = preStr;
   for ( let key in newStr ) {
      newStr[key] && ( str = `${str} ${key}` );
   }
   // console.log('classObj: ', str);
   return str;
}

const dealConfig: Record<string, Function> = {
   'string': (preStr: string, newStr: string) => `${preStr} ${newStr}`,
   'array': classArr,
   'object': classObj,
   'undefined': (preStr: string, newStr: string) => preStr,
}

export const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
   const prefixCls = 'poiUI';

   if (customizePrefixCls) return customizePrefixCls;

   return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
 };