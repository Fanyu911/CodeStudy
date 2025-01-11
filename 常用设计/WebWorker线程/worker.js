function fn(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fn(n - 1) + fn(n - 2);
}

self.onmessage = (e) => {
  const { count } = e.data;
  const sum = fn(count);
  self.postMessage({
    data: sum,
    name: 'single test',
  });
  self.close();
};
