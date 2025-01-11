var name = 'window';
var person = {
  name: 'Alan',
  sayOne: function () {
    console.log(this.name);
  },
  sayTwo: function () {
    return function () {
      console.log(this.name);
    };
  },
};
person.sayOne(); //Alan
person.sayTwo()(); // window
