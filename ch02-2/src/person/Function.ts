// 함수는 객체다!
let add = new Function('a','b', 'return a+b');
let result = add(1,2);
console.log(result); // 3