// function parseTemplateString(template, data) {
//   const placeholderRegex = /&{([^}]*)}/g;
//   return template.replace(placeholderRegex, (match, placeholder) => {
//     const parts = placeholder.split('|');
//     let value = data;
//     for (const part of parts.slice(0, -1)) {
//       value = value?.[part.trim()];
//       if (value === undefined) {
//         break;
//       }
//     }
//     const lastPart = parts[parts.length - 1].trim();
//     if (typeof value === 'function') {
//       value = value();
//     }
//     return value === undefined ? match : value;
//   });
// }
function parseTemplateString(str, obj) {
  const reg = /&{([^}]*)}/g;
  str.replace(reg, (match, place) => {
    console.log(match, place); // &{user.getName()} user.getName()

    return 1;
  });
}

// 示例用法
const str = `你好&{user.getName()}&{greeting}&{123}`;
const data = {
  user: {
    getName: () => '小明',
  },
  greeting: '欢迎光临',
  123: '世界',
};
const result = parseTemplateString(str, data);
console.log(result);
