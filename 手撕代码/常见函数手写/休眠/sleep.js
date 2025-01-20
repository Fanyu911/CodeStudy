function sleep(time) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
}
sleep(3000).then(() => {
  console.log("action");
});
