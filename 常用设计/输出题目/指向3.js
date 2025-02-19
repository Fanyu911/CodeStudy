function Obj() {
  this.num = 1;
  this.getNum = function () {
    console.log(this.num);
  };
  this.getNumLater = function () {
    setTimeout(() => {
      console.log(this.num);
    }, 1000);
  };
}

const obj = new Obj();
const func = obj.getNumLater;
obj.getNumLater(); // 1 因为箭头函数没有自己的this，所以箭头函数的this指向的是它的外层作用域的this,也就是getNumLater函数的this,而getNumLater函数是在obj上调用的，所以this指向obj
func(); // undefined 因为func是在全局作用域调用的，所以this指向的是全局作用域，而全局作用域中没有num属性
