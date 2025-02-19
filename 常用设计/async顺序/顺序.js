async function async1() {
  console.log("a");
  await async2();
  console.log("b");
}
async function async2() {
  console.log("c"); // 相当于后面直接加进微任务列表
  // return Promise.resolve().then(() => {
  //   console.log("end");
  // });
}
async1();
new Promise(function (resolve) {
  console.log("d");
  resolve();
}).then(function () {
  console.log("e");
});
//node执行结果 acdbe 新浏览器s
//旧chrome 执行结果 acdeb
