const isArray = (obj) => ({}.toString.call(obj) === "[object Array]");
console.log(isArray([1, 2]));

// Object.prototype.toString 是一个通用的方法
// 用于返回对象的内部 [[Class]] 属性的字符串表示。
console.log({}.toString([1])); //  错误 toString不接受参数
