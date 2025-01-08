const str = 'https://juejin.cn/post/index?search=123';

// 方法一
const url = new URL(str);
console.log(url.searchParams.get('search'));
// 方法二

function getQueryParams(url) {
  const paramArr = url.slice(url.indexOf('?') + 1).split('&');
  const params = {};
  paramArr.map((param) => {
    const [key, val] = param.split('=');
    params[key] = decodeURIComponent(val);
  });
  return params;
}
