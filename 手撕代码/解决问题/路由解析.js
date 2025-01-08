const url = 'https://aaaaa/?aaa=bbbb&title=dddd';

// split
const obj = url.split('?')[1];
const obj2 = obj.split('&');
const map = {};
for (let i of obj2) {
  const [key, value] = i.split('=');
  map[key] = value;
}
console.log(map['title']);

// API
function extractTitleFromUrl(url) {
  const urlObject = new URL(url);
  const params = new URLSearchParams(urlObject.search);
  return params.get('title');
}
const titleValue = extractTitleFromUrl(url);
console.log(titleValue); // 输出 "dddd"
