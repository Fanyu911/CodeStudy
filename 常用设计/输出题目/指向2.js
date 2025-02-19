var name = "window";
var person = {
  name: "Alan",
  sayOne: function () {
    console.log(this.name);
  },
  sayTwo: function () {
    return function () {
      console.log(this.name);
    };
  },
  sayThree: () => {
    console.log(this.name);
  },
};
globalThis.name = "globalThis";
module.exports.name = "module.exports";
person.sayOne(); // Alan
person.sayTwo()(); // globalThis
person.sayThree(); // undefined
