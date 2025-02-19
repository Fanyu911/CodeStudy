var a = { n: 1 };
var b = a;
a.x = a = { n: 2 }; //  1.先执行a.x = {n:2} 2.再执行a = {n:2} 这里a指向了新对象,b还是指向原对象

console.log(a.x);
console.log(b.x);
