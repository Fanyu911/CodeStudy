var a = 0;
var b = 0;
var c = 0;
function fn(a) {
  console.log('fn', a++, c);
  function fn2(b) {
    console.log('fn2', a, b, c);
  }
  var c = 4;
  fn = fn2;
}
fn(1);
fn(2);
